package org.emaflix.view;

import org.emaflix.model.Movie;

import java.util.List;

public record Content(String contentId, String title, String age, String poster, List<String> tags, List<String> genro) {

    public static Content fromMovie(Movie movie) {
        return new Content(movie.getContentId(), movie.getTitle(), movie.getAgeRange(), movie.getThumbnail(), movie.getTags(), movie.getGenres());
    }

}