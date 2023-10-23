import React, { useEffect, useState } from 'react';
import { searchMovies } from '../API';
import { Link, useSearchParams } from 'react-router-dom';
import { Movie } from '../types';
import { StyledMovieList, StyledForm, StyledMovieCard } from './styles'
import Loader from '../Loader';
import { useForm } from 'react-hook-form';

type FormValues = {
    search: string;
}


const Search = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const submit = (values: FormValues) => {
        console.log("submit")
        setSearchParams({ search: values.search })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    useEffect(() => {
        const search = searchParams.get('search')
        if (search) {
            setIsLoading(true)
            searchMovies(search).then((res) => {
                setMovies([...res])
            }).finally(() => setIsLoading(false))
        }
    }, [searchParams])

    console.log(errors)

    return <>
        <StyledForm onSubmit={handleSubmit(submit)}>
            <div>
                <input {...register("search", { required: true, minLength: 3 })} name="search" defaultValue={searchParams.get('search') as string} />
                {errors.search && <div>minimum length 3</div>}
            </div>
            <button type="submit">SEARCH</button>

        </StyledForm>
        {isLoading && <Loader />}
        {!isLoading && <StyledMovieList>
            {movies.map((movie) => <div key={movie.id}>
                <Link to={`/movie-details/${movie.id}`}>
                    <StyledMovieCard>
                        <img src={movie.poster} alt="poster" />
                        <div>{movie.title}</div>
                        <div>{movie.releaseYear}</div>
                    </StyledMovieCard>
                </Link>
            </div>)}
        </StyledMovieList>
        }
    </>
}

export default Search;