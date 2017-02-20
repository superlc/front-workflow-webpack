/**
 * Created by cluo on 2017/2/20.
 * 测试公共文件的引入
 */

import Add from 'moduleA';
import Person from 'moduleB';

const global = {
    add : Add,
    Person : Person
};

export default global;