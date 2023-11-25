package org.emaflix.model;

import lombok.Getter;

import java.util.UUID;

@Getter
public class Comment {

    private final String commentId = UUID.randomUUID().toString(); // random id here for this comment, used for tracking and identifying.
    private final String userId;
    private final String userName;
    private final String userComment;

    public Comment(String userId, String userName, String userComment) {
        this.userId = userId;
        this.userName = userName;
        this.userComment = userComment;
    }

}