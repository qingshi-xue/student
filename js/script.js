var username=document.getElementById("username");
var form=document.getElementById("form");
var email=document.getElementById("email");
var password=document.getElementById("password");
var password2=document.getElementById("password2");
 
 
//验证失败
function showError(input,message){
  const formControl=input.parentElement;
  formControl.className="form-control error";
 
  const small=formControl.querySelector("small");
  small.innerText=message;
  
  return false;
 
}
 
//验证成功
function showSuccess(input){
  const formControl=input.parentElement;
  formControl.className="form-control success"
  
  return true;
}
 
 
//验证必填项
function checkRequired(inputArr){
 
  
  inputArr.forEach(function(input){
 
    if (input.value.trim()==="") {
      showError(input,`${getKeyWords(input)}为必填项`);
    }else{
      showSuccess(input);
    }
 
  })
 
}
//截取获取字符串
function getKeyWords(input){
  return input.placeholder.slice(3);
}
 
 
//验证邮箱格式
function checkEmail(input){
      const re=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (re.test(input.value.trim())) {
        showSuccess(input);
		return true;
      }else{
        showError(input,"邮箱格式错误");
		return false;
      }
 
}
//验证长度
function checkLength(input,min,max){
  console.log(input.value.length)
  if (input.value.length<min) {
   
    showError(input,'字符长度不足')  //`${getKeyWords(input)}至少${min}个字符`
	return false;
  } else if(input.value.length>max) {
    showError(input,`${getKeyWords(input)}最多${max}个字符`);
	return false;
  }else{
    showSuccess(input);
	return true;
  }
}
 
//验证密码
function checkPasswordMatch(input,input2){
  if (input.value!=input2.value) {
    showError(input2,"密码不匹配");
	return false;
  }else{
    showSuccess(input2);
	return true;
  }
}
 
//提交表单
/* form.addEventListener("submit",function(e){
 
  //取消默认事件
  e.preventDefault();
 
  //必填项
  checkRequired([username,email,password,password2]);
  //用户名长度
  checkLength(username,3,15);
  //密码长度
  checkLength(password,6,12);
  //验证邮箱
  checkEmail(email);
  //验证密码
  checkPasswordMatch(password,password2);
}) */

function  CheckAll(){
		if(checkLength(username,3,15) && checkEmail(email) && checkLength(password,6,12) && checkPasswordMatch(password,password2)){
			return true ;//能够提交表单
		}else{
			return  false  ;//不能提交表单
		}
	}