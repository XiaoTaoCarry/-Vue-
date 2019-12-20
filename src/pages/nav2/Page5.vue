<template>
	<section>
	<Form :model="formItem">
		<Form-item label="">
			<div v-html="formItem.textarea" class="text-copy">
			</div>
		</Form-item>
		<Button type="success" long
		v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">COPY TO CLIPBOARD  (测试单击按钮复制文本)</Button>
	</Form>
	
	</section>

</template>


<script>
	
	export default {
		data () {
            return {
              message: '有一种遇见，不曾邀约，却心有灵犀；有一种目光，不远不近，却一直在守望；山水相逢，相约陌上，你明媚的笑脸，是我心中倾城的暖，你在，我在，最美好的懂得也在，便是用一朵花开的明媚，见证了整个春天。',
			  formItem: {
				  textarea: '<h1>自助打印系统</h1></br>'+
				  			'              '+
				  			'极速打印</br>'+
							 '             '+ 
							'9折优惠</br>'+
							 '             '+ 
							'加入我们</br>'+
							 '             '+ 
							'  成为会员</br>'
							
			  }
            }
        }
	}
</script>
<style scoped>
	.text-copy{
		text-align: center;
		font-size: 14px;
		letter-spacing: 2px;
		margin: 20px;
	}
</style>