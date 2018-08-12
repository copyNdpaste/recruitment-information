
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/scraper',
	db_schemas: [
        {file:'./job_schema',collection:'listings',schemaName:'JobSchema',modelName:'JobModel'}
	],
    //file:실행파일 path:route경로 method:함수이름 type:get or post #get, post 잘못 쓰면 인식 못함
	route_info: [
                {file:'./findjob',path:'/process/ITnewbie',method:'ITnewbie',type:'post'},
                {file:'./findjob',path:'/process/ITnewbieSearch',method:'ITnewbieSearch',type:'post'},
	],
	facebook: {		// passport facebook
		clientID: '196604394366966',
		clientSecret: '5401f32b378a3c464f12edadb04b768e',
		//callbackURL: 'http://localhost:3000/auth/facebook/callback',
        callbackURL: '/auth/facebook/callback',
        profileFields:['emails','name','id']

	},
	twitter: {		// passport twitter
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/twitter/callback'
	},
	google: {		// passport google
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/google/callback'
	}
}