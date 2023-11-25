package org.emaflix.controller;

import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.sun.net.httpserver.HttpServer;
import org.bson.codecs.configuration.CodecProvider;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.emaflix.model.Movie;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;

import static com.mongodb.MongoClientSettings.getDefaultCodecRegistry;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class DataController extends EmaflixController {

    private final Map<String,Movie> movies = new ConcurrentHashMap<>();
    private final CodecProvider pojoCodecProvider = PojoCodecProvider.builder().automatic(true).build();
    private final CodecRegistry pojoCodecRegistry = fromRegistries(getDefaultCodecRegistry(), fromProviders(pojoCodecProvider));

    public DataController(HttpServer httpServer) {
        super(httpServer);
    }

    public boolean isContentAvailable(String contentID){
        return this.movies.containsKey(contentID);
    }

    public String getContentPath(String contentId){
        return this.movies.get(contentId).getMovieFilePath();
    }

    @Override
    public void register() {
        this.cacheAll();
    }

    public void deleteMovie(Movie movie){
        wrapMongoOperation(mongoClient -> {
            MongoDatabase database = mongoClient.getDatabase("emaflix").withCodecRegistry(pojoCodecRegistry);
            MongoCollection<Movie> collection = database.getCollection("movies", Movie.class);
            collection.deleteOne(new BasicDBObject("contentId", movie.getContentId()));
        });
    }

    public void updateMovie(Movie movie){
        wrapMongoOperation(mongoClient -> {
            MongoDatabase database = mongoClient.getDatabase("emaflix").withCodecRegistry(pojoCodecRegistry);
            MongoCollection<Movie> collection = database.getCollection("movies", Movie.class);
            collection.updateOne(new BasicDBObject("contentId", movie.getContentId()), movie);
        });
    }

    public void insertMovie(Movie movie){
        wrapMongoOperation(mongoClient -> {
            MongoDatabase database = mongoClient.getDatabase("emaflix").withCodecRegistry(pojoCodecRegistry);
            MongoCollection<Movie> collection = database.getCollection("movies", Movie.class);
            collection.insertOne(movie);
        });
    }

    private void cacheAll(){
        String connUrl = ";";
        System.setProperty("mongouri", connUrl);
        String mongoConnURI = System.getProperty("mongouri");
        try (MongoClient mongoClient = MongoClients.create(mongoConnURI)) {
            MongoDatabase database = mongoClient.getDatabase("emaflix").withCodecRegistry(pojoCodecRegistry);
            MongoCollection<Movie> collection = database.getCollection("movies", Movie.class);
            for (Movie movie : collection.find()){
                movies.put(movie.getContentId(), movie);
            }
        }
    }

    private void wrapMongoOperation(Consumer<MongoClient> consumer){
        String mongoConnURI = System.getProperty("mongouri");
        try (MongoClient mongoClient = MongoClients.create(mongoConnURI)) {
            consumer.accept(mongoClient);
        }
    }

}