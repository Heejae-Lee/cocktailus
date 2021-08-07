package com.iot.cocktailer.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.iot.cocktailer.domain.RecipeArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Base64;
import java.util.UUID;

@Service
public class S3UploadService {
    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Autowired
    public S3UploadService(AmazonS3 amazonS3){
        this.amazonS3 = amazonS3;
    }

    public String upload(RecipeArticle recipeArticle,String dirName){

        String fileName = dirName+"/"+ UUID.randomUUID();
        byte[] image = Base64.getDecoder().decode((recipeArticle.getImageURL().substring(recipeArticle.getImageURL().indexOf(",")+1)).getBytes());

        String contentType = recipeArticle.getImageURL().substring(5,recipeArticle.getImageURL().indexOf(';'));
        InputStream input = new ByteArrayInputStream(image);

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(contentType);
        objectMetadata.setContentLength(image.length);

        return putS3(fileName,input,objectMetadata);
    }

    private String putS3(String fileName, InputStream input, ObjectMetadata objectMetadata){
        amazonS3.putObject(bucket,fileName,input,objectMetadata);
        return amazonS3.getUrl(bucket,fileName).toString();
    }

}
