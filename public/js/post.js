function Post(){
	function bindEvent(){
			$(".post_edit").click(function(e){
				var params = {
					id: $(".id").val(),
					title: $(".title").val(),
					content: tinymce.get("content").getContent(),
					author: $(".author").val()
				};
				var base_url = location.protocol + "//" + document.domain + ":" + location.port;
				$.ajax({
					url: base_url + '/admin/post/edit',
					type: 'PUT',
					dataType: 'json',
					data: params,
					success: function(res){
						if(res && res.status_code == 200){
							location.reload();
						}
					}
				});
				
			});
			$(".post_delete").click(function(e) {
				/* Act on the event */
				var post_id = $(this).attr("post_id");

				var base_url = location.protocol + "//" + document.domain + ":" + location.port;
				$.ajax({
					url: base_url + '/admin/post/delete',
					type: 'DELETE',
					dataType: 'json',
					data: {id: post_id},
					success: function(res){
						if(res && res.status_code == 200){
							location.reload();
						}
					}
				});
			});

	}
	bindEvent();
}

$(document).ready(function(){
	new Post();
})