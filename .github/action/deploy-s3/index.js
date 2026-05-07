import * as core from "@actions/core";
import * as github from "@actions/github";  
import * as exec from "@actions/exec";

function run(){
    // Get the inputs from the action configuration
    const bucketName = core.getInput("bucket-name" ,{required: true});
    const region = core.getInput("region" ,{required: true});
    const directory = core.getInput("directory" ,{required: true});
 
    //upload the files to s3 bucket
    const s3Uri = `s3://${bucketName}`;
    const command = `aws s3 sync ${directory} ${s3Uri} --region ${region}`;
  
}
run();