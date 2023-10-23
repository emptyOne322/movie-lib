import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../types';
import { getMovieDetails } from '../API';
import { StyledMovieDetails, StyledMovieInfo, StyledLabel, StyledTitle } from './styles';
import Loader from '../Loader';

const MovieDetails = () => {
    let { id } = useParams();
    const [movieInfo, setMovieInfo] = useState<Movie>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            getMovieDetails(id).then((res) => {
                setMovieInfo({ ...res })
            }).finally(() => setIsLoading(false))
        }
    }, [id])
    return <StyledMovieDetails>
        {isLoading && <Loader />}
        {!isLoading && (
            <>
                <img src={movieInfo?.poster} alt="poster" />
                <StyledMovieInfo>
                    <StyledTitle>{movieInfo?.title}</StyledTitle>
                    <StyledLabel>released</StyledLabel>
                    <div>{movieInfo?.releaseYear}</div>
                    <StyledLabel>genre</StyledLabel>
                    <div>{movieInfo?.genre}</div>
                    <StyledLabel>director</StyledLabel>
                    <div>{movieInfo?.director}</div>
                    <StyledLabel>actors</StyledLabel>
                    <div>{movieInfo?.actors}</div>
                    <StyledLabel>plot</StyledLabel>
                    <div>{movieInfo?.plot}</div>
                </StyledMovieInfo>
            </>
        )}

    </StyledMovieDetails>
}

export default MovieDetails;