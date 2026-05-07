const core =require("@actions/core");
const github =require("@actions/github");
const exec =require("@actions/exec");

function run(){
    core.info("Hello world from my first github action by js");
}
run();