import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

async function run() {

    // Get inputs
    const bucketName = core.getInput("bucket-name", { required: true });

    const region = core.getInput("region", { required: true });

    const directory = core.getInput("directory", { required: true });

    // Build S3 path
    const s3Uri = `s3://${bucketName}`;

    // Build AWS CLI command
    const command = `aws s3 sync ${directory} ${s3Uri} --region ${region}`;

    // Execute command
    await exec.exec(command);
}

run();