module.exports = {
	host_url: "https://oauth.local/auth",	// mounted on this url
	base: "/",								// add a base url path. e.g: "/auth"
	port: 6284,

	debug: true,							// add stack trace & infos in errors

	ssl: {
		key: 'keys/server.key',
		certificate: 'keys/server.crt'
	},

	staticsalt: 'i m a random string, change me.',
	publicsalt: 'i m not really important.',

	redis: {
		post: 6379,
		host: '127.0.0.1'
	},

	smtp: {
		service: "Gmail",
		auth: {
			user: "mytest042@gmail.com",
			pass: "P@ssword0"
		}
	},

	plugins: [
		'server.statistics',

		/* --- only for oauth.io --- */
		'server.auth',
		'server.users',
		'server.adm',
		'server.oauth_io',
		'server.tmp_not_ssl'
		/* ------------------------- */
	]
}