package org.emaflix.service;

import com.sun.net.httpserver.HttpExchange;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.RandomAccessFile;

public class FileService {

    public void serveFile(HttpExchange exchange, File file, long start, long end, long fileLength) throws IOException {
        exchange.getResponseHeaders().add("Content-Type", "video/mp4");
        exchange.getResponseHeaders().add("Content-Length", String.valueOf(end - start + 1));
        exchange.getResponseHeaders().add("Content-Range", "bytes " + start + "-" + end + "/" + fileLength);
        exchange.getResponseHeaders().add("Accept-Ranges", "bytes");
        exchange.sendResponseHeaders(206, end - start + 1);
        byte[] seekContent = partialSeek(file, start, end + 1);
        if(seekContent != null){
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(seekContent);
            }
        }
    }

    private byte[] partialSeek(File file, long start, long finish) {
        int length = (int) (finish - start);
        try (RandomAccessFile randomAccessFile = new RandomAccessFile(file, "r")) {
            randomAccessFile.seek(start);
            byte[] buffer = new byte[length];
            randomAccessFile.read(buffer, 0, length);
            return buffer;
        } catch (Exception exception) {
            exception.fillInStackTrace();
            return null;
        }
    }

}