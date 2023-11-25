package org.emaflix.model;

import lombok.Getter;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Getter
public class Movie extends Document {

    private final String contentId;
    private final List<String> genres = new ArrayList<>();

    private final String movieFilePath;

    protected String title;
    private final List<String> tags = new ArrayList<>();
    private String ageRange;

    private final List<Comment> comments = new CopyOnWriteArrayList<>();

    public Movie(String contentId, String movieFilePath) {
        this.contentId = contentId;
        this.movieFilePath = movieFilePath;
    }

}