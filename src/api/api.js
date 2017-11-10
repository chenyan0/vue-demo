import axios from 'axios'
import config from './config'
// axios(config);
class API {
	//获取活动列表
	getTask (param) {
		return axios.post(param.api,{},config);
	}
	getPageIndexTasks(param){
		return axios.post(param.api,param.data,config);
		
	}
	//添加活动
	postTask (param) {
		return axios.post(param.api,param.data,config);
	}
	login (param) {
		return axios.post(param.api,param.data,config);
	}
	getNews(param){
		return axios.post(param.api,{},config);
	}
	reqSuccess(obj,msg,func){
			obj.$message({
          		message: msg,
				  type: 'success',
				  onClose:func
        	});
	}
	reqFail(obj,msg){
			obj.$message({
          		message: msg,
          		type: 'success'
        	});
	}
}
export default API;