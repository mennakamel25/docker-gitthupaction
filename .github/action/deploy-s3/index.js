import * as core from "@actions/core";
import * as github from "@actions/github";  
import * as exec from "@actions/exec";  

function run(){
    core.info("Hello world from my first github action by js");
}
run();