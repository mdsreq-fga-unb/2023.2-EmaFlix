package org.emaflix.model;

import lombok.Getter;
import lombok.Setter;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Getter
public class Movie extends Document {

    private final String contentId, movieFilePath;
    private final List<String> genres = new ArrayList<>();

    @Setter private String thumbnail, title, ageRange;
    private final List<String> tags = new ArrayList<>();
    private final List<Comment> comments = new CopyOnWriteArrayList<>();

    public Movie(String contentId, String movieFilePath) {
        this.contentId = contentId;
        this.movieFilePath = movieFilePath;
    }

    public void addGenre(String genre){
        this.genres.add(genre);
    }

    public void addTags(String tag){
        this.tags.add(tag);
    }

}