'use strict';

app.factory('Post', 
	    function ($firebase, FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL + 'posts');
		var posts = $firebase(ref).$asArray();

		var Post = {
		//    all: posts,
		    all: function(aktuellertext) {
			return $firebase(ref.child(aktuellertext)).$asArray();
		    },
		    create: function(post, aktuellertext) {
		//	return posts.$add(post);
			return $firebase(ref.child(aktuellertext)).$asArray().$add(post);
		    },
		    find: function(postId) {
			return $firebase(ref.child(postId)).$asObject();
		    },
		    delete: function (post) {
			return posts.$remove(post);
		    }
		};
		return Post;
	    
	   });