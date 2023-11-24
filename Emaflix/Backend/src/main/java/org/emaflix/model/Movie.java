package org.emaflix.model;

import java.util.ArrayList;
import java.util.List;

public class Movie {

    private final String contentId;
    private final List<String> genres = new ArrayList<>();
    protected String title;
    private final List<String> tags = new ArrayList<>();
    private String ageRange;

    public Movie(String contentId) {
        this.contentId = contentId;
    }

}