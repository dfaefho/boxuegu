define(['aside', 'header', 'loading', 'nprogress', 'jquery'], function(undefined, undefined, undefined, nprogress, $) {
	
	// 添加讲师，成功后跳转到讲师列表页
	(function() {
		
		$('#teacher-add-edit-form').on('submit', function() {
			$.post('/v6/teacher/add', $(this).serialize(), function(data) {
				location.href = '/html/teacher/teacher_list.html';
			});
			return false;
		});
		
	})();
	
	nprogress.done();
});
