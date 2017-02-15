"use strict";
const fs = require('fs');
const exec = require('child_process').exec
const chokidar = require('chokidar');
const log4js = require('log4js');
const logger = log4js.getLogger();

var config =  require('./watcher-config');

//获取配置文件中的待监控目录
var watchDirs = config.dirs;

//编译命令
var cmd = config.cmd;

//监听的文件变化
var reg = config.regex;

//是否在编译中
var buildingInfo = {
    building : false,
    //1秒内的修改变化放到最后一次进行一起编译
    duration : 200,
    timers : null
};

var watcher = (dir,cmd) =>{
    chokidar.watch(dir, {
        ignored: /(^|[\/\\])\../
    }).on('all', (event, path) => {
        //只处理特定的文件格式和类型
        if(reg.test(path)){
            //添加修改的记录
            //changeSet.add(path + ' ' + event);
            logger.info(path + ' ' + event);
            //如果在1s内没有执行，则覆盖掉之前的任务
            if(buildingInfo.timer){
                clearTimeout(buildingInfo.timer);
            }
            //重新刷新任务时间
            buildingInfo.timer = setTimeout(() => {
                /**
                 * 创建具体的任务
                 * */
                logger.info('==================开始编译==================');
                //执行CMD命令
                exec(cmd,(error,stdout,stderr) =>{
                    if(stdout){
                        logger.info(stdout);
                    }
                    if(stderr){
                        logger.info(stderr);
                    }
                    //将webpack编译的信息打印到控制台
                    if(error){
                        logger.error('==================编译失败==================');
                    }else{
                        logger.info('==================编译成功==================');
                    }
                });
            },buildingInfo.duration);
        }
    });
};
watchDirs.forEach((item) => {
    watcher(item.dir,cmd);
});

