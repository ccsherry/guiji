'use strict';

/* Controllers */

  app.controller('FlotChartDemoCtrl'
			  , ['$scope', '$modal', '$log', 
			     'js.modules.service.statisticsService',
			  '$interval',
			    '$http',function($scope, $modal, $log,statisticsService,$interval, $http) {  
	  
	// js 获取当前时间
		function fnDate() {
			var oDiv = document.getElementById("show");
			var date = new Date();
			var year=date.getFullYear();// 当前年份
			var month = date.getMonth();// 当前月份
			var data = date.getDate();// 天
			var hours = date.getHours();// 小时
			var minute = date.getMinutes();// 分
			var second = date.getSeconds();// 秒
//			var time = year + "-" + fnW((month + 1)) + "-" + fnW(data)
//			+ " " + fnW(hours) + ":" + fnW(minute) + ":"
//			+ fnW(second);
			var time = fnW(hours) + ":" + fnW(minute) + ":"
			+ fnW(second);
			oDiv.innerHTML = time;
		}

		// 补位 当某个字段不是两位数时补0
		function fnW(str) {
			var num;
			str >= 10 ? num = str : num = "0" + str;
			return num;
		}

		var timer = setInterval(function() {
			fnDate();
		}, 1000);
	  
	  
		
		$scope.findStatisticsNum = function(){
			$scope.qzcNum = 0;
			$scope.qljNum = 0;
			$scope.qallNum = 0;
			statisticsService.findStatisticsNum().success(function(response){
				$scope.itemEntry = response.statisticsNumEntry;
				$scope.qzcNum += $scope.itemEntry.xkHospital;
				$scope.qzcNum += $scope.itemEntry.inPrison;
				$scope.qzcNum += $scope.itemEntry.shHospital;
				$scope.qzcNum += $scope.itemEntry.others;
				
				$scope.qljNum += $scope.itemEntry.outPrison;
				$scope.qljNum += $scope.itemEntry.outRun;
				
				$scope.qallNum = $scope.qljNum+$scope.qzcNum;
			})
		}
		$scope.findStatisticsNum();
	  
	  
		$scope.initIndex = function() {
			statisticsService.statisticsIndex().success(function(response) {
				$scope.items = response.finList;
				console.info($scope.items);
				
				
				$scope.totalpAllNum = response.totalpAllNum;
				$scope.totalpCjNum = response.totalpCjNum;
				$scope.totalpOthersNum = response.totalpOthersNum;
				$scope.totalpUdNum = response.totalpUdNum;
				
				$scope.totalpYdNum = response.totalpYdNum;
				$scope.totalpSnjyNum = response.totalpSnjyNum;
				$scope.totalpWcjyNum = response.totalpWcjyNum;
				$scope.totalpHjNum = response.totalpHjNum;
				$scope.totalOtherljNum = response.totalOtherljNum;
				$scope.totalXKzyNum = response.totalXKzyNum;
				$scope.totalSHzyNum = response.totalSHzyNum;
			});
		};

		// $scope.initIndex();

		var timer2;
		$scope.init1 = function() {
			console.info(timer2);
			if (timer2 != undefined) {
				console.info("timer已启用！");
			} else {
//				$scope.initIndex();
				timer2 = $interval(function() {
					$scope.initIndex();
				}, 1000);
			}
		}
//		$scope.initIndex();
		$scope.init1();

		// 页面跳转或者关闭调用
		$scope.$on("$destroy", function() {
			clearInterval(timer);
//			$interval.cancel(timer);
			$interval.cancel(timer2);
		})
		
		
		
		$(function () {
			 $('#inPrison').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.inPrison = value;
		                	statisticsService.modifyInPrison($scope.inPrison).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
			 $('#xkHospital').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.xkHospital = value;
		                	statisticsService.modifyXkHospital($scope.xkHospital).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
			 $('#shHospital').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.shHospital = value;
		                	statisticsService.modifyShHospital($scope.shHospital).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
			 $('#others').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.others = value;
		                	statisticsService.modifyOthers($scope.others).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
			 $('#outPrison').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.outPrison = value;
		                	statisticsService.modifyOutPrison($scope.outPrison).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
			 $('#outRun').editable({
		            type: "text",                //编辑框的类型。支持text|textarea|select|date|checklist等
//		            title: "用户名",              //编辑框的标题
		            disabled: false,             //是否禁用编辑
		            emptytext: "空文本",          //空值的默认文本
		            mode: "inline",              //编辑框的模式：支持popup和inline两种模式，默认是popup
		            validate: function (value) { //字段验证
		                if (!$.trim(value)) {
		                    return '不能为空';
		                }else{
		                	$scope.outRun = value;
		                	statisticsService.modifyOutRun($scope.outRun).success(function(){
		                	}).then(function(){
		                		$scope.findStatisticsNum();
		                	})
		                }
		            }
		        });
			 
			 
	    });
		
  }]);