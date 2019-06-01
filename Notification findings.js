  function trigger_notification()
            {
                //check if browser supports notification API
                if("Notification" in window)
                {
                    if(Notification.permission == "granted")
                    {
                        var notification = new Notification("Notification Title", {"body":"Message B dsfds sd dsf sdf dsf sdf dsf dsf sdf sd fody", "icon":"http://qnimate.com/wp-content/uploads/2014/07/web-notification-api-300x150.jpg"});
                    }
                    else
                    {
                        Notification.requestPermission(function (permission) {
                            if (permission === "granted") 
                            {
                                var notification = new Notification("Notification Title", {"body":"Message B dsfds sd dsf sdf dsf sdf dsf dsf sdf sd fody", "icon":"http://qnimate.com/wp-content/uploads/2014/07/web-notification-api-300x150.jpg"});
                            }
                        });
                    }
                }   
                else
                {
                    alert("Your browser doesn't support notfication API");
                }       
            }


            <script type="text/javascript">
           /* function trigger_notification(title,message)
            {
                
                //check if browser supports notification API
                if("Notification" in window)
                {
                    console.log("dddd",title,message,Notification.permission);
                    if(Notification.permission == "granted")
                    {
                         console.log("ddhhhhdd",title,message,Notification.permission);
                        var notification = new Notification(title, {"body":message, "icon":"http://qnimate.com/wp-content/uploads/2014/07/web-notification-api-300x150.jpg"});
                        setTimeout(notification.close.bind(notification), 5000);
                    }
                   
                }   
                else
                {
                    alert("Your browser doesn't support notfication API");
                }       
            }*/


            // Get permission to run API
            (function() {
                 if("Notification" in window)
                {
                 Notification.requestPermission(function (permission) {
                            console.log("Permission  -- ",permission);
                            
                });
            }   
                else
                {
                    alert("Your browser doesn't support notfication API");
                }  
            })();
           
            

             function trigger_notification(title,message)
            {
                //check if browser supports notification API
                if("Notification" in window)
                {
                   
                    if(Notification.permission == "granted")
                    {
                        var notification = new Notification(title, {"body":message, "icon":"http://qnimate.com/wp-content/uploads/2014/07/web-notification-api-300x150.jpg"});
                    }
                    else if (Notification.permission == "denied")
                    {
                       alert("Permission Denied")
                    }
                }   
                else
                {
                    alert("Your browser doesn't support notfication API");
                }       
            }

            setTimeout(function(){
                trigger_notification("Thanks","You have waited to the site more than five minutes");
            },5000)
        function getData(){
          
                $.ajax({url: "http://demo5242215.mockable.io/mock1", success: function(result){
                    console.log(result.title,result.message);
                    trigger_notification(result.title,result.message);
                }});
          
        }
        function getData2(){
           
                $.ajax({url: "http://demo5242215.mockable.io/mock2", success: function(result){
                    console.log(result.title,result.message);
                    trigger_notification(result.title,result.message);
                }});
          
        }
</script> 

            https://developer.mozilla.org/en-US/docs/Web/API/notification
            http://qnimate.com/web-notification-api/
            https://gauntface.github.io/simple-push-demo/
            https://hackernoon.com/why-and-how-to-implement-web-notification-api-4eb795c5b05d