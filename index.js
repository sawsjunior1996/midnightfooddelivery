'use strict';
 const express = require("express"),
	 app = express(),
	 request = require('request'),
	 firebase = require('firebase-admin');

var firebaseConfig  = {
  "type": "service_account",
  "project_id": "midnightfooddelivery-e7e7f",
  "private_key_id": "8ae0f45a4df2c2142e80e0794a79bdd9887d3f6f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgTIBw/Y8Anps0\n+N1zSVJ5i/N2ZsV6F9XxH49gqks48jSnizLbwCiMAiRo18aKqlrGNSGwD3Nb7TB3\nnIzOevj4kJkC98LdFPSFkuA5vSGy8o0RmGxEtxKYekkw89hqehPGNWI7/PoW4SeA\nnCE0zyXFpoZA1CzcvOd8k0Wl/bVwxPqoD50nITTGF8NB3jkrkFqyVk1LvMOa7KPP\nxuxFYdJXvdf8kQ93aDR6c2bqs4VUlR+lBd0usn390vDu9VifRNHgIuc0vc29jS7z\nEnhukISbZ+JPB86I+Y7JRyBvxnP44Vqk4qIu3tlA5Fyx01n1deOAKo4zJ7QgaqKY\nWo4HG/wrAgMBAAECggEAZavn0M/u4X4DpqhkYVzMKNJ6gqIlQ6nITatbp5qpzF9l\n5MhhPmFFP+m8rVWZ5sM/sHbnFVJ7nSDQBngND4+IicupwEGkr+hOyrmAMEv+GYp+\nzYoFEcTWhg1wXeM6p1E842zRYZXTm0lmSZL8Ll7zpTtNwdcrmsd6Oura+Fofw8R9\nBlwT+CfRDxkd1hBIkABFndN8kMHtHVZ7Z1od9zhgd11ibtdGGLuS/R1cq2Q0bB0G\n4j7KN1+7DQeabiFRC2X5fHqbF8OG7LmkiRzMm2UB4tF7f9Jub81a9Zu3Qu9hzCqL\n+0QnwVHiI//Hxs0OBQcxYIvj8YXJRG0VQvddrQ2wIQKBgQDx0YnidHKGcE8bUalb\nrty3kgC2zoeIuw8OkMuGgLZ9hd0sfNYHPpudYfCQHJ7tbCTFeIdKUVe9X23dXdqv\nQbKdjlbIE1vKY+Z1twbTnuySwsUt9jG7LoTAaLTye3pv+k6faSxiWrTRJAFBV+s+\n7dEIHVbBYAdPjvWUNV9lviza2wKBgQDtc+/0UAOLVOChZWUTHrZLcUKm3m0h/lT2\nokBId0FdWndbcvZE8waxGPBejMloRrx85DAU4BzQlsnfEAz5uePkACMcPYfoKx7Z\nZ+E7G3F4OGp2xbo/Wi6rn4iDBUbHSb2aJvxTnnr0Y24/NB7R0tEfHy+xX9pD9S89\na6dLgnYc8QKBgE68lnPYzK1/hhJ0HXvPzOgsrvTW/ISFu9pXRR2vbTwjySdCIoJL\nXWn6SNTzrL/LtZFitFJ7d+EeYGxysdDcyGbKwPD2dK3Kp3BuvtdK6ObEamWTww+a\njvkDXt+RWwV47/6xxRTlSfjLC2mWUe+0iZplyyi9tsOt3cJ7OmurZ3l/AoGAUooz\nhexuXveBIfk5+jx5x522OoUk0GU1KYpa6BW0Pfwdc0dx/aOw1szBeUxdEodMK+my\nIP+KZKOVxpkwuXn5kp7NlZp57KVYkt/+NeqjNdP+hgzTYgQ6JuRMsqaZ5NpoMvaM\nTZDQUrVhdEzszakHklbn4DNejrLi2ena/G98GTECgYEAnWj+benkKzhpVoStQFUR\nOxYrWiA2NHr97buQOHUYNAbu+TVnleCCjK80RhB5XlBsP3pKuytEqIVZIeRCCj3C\noudO4VzbSAnHdV8mrPgpss2IqGJQUNqCQe9KYdjZutpE76Hs3uspRm3OYi8HrJD+\nF8HHuxzn0WqQRKWARF1l4EI=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-bmcbb@midnightfooddelivery-e7e7f.iam.gserviceaccount.com",
  "client_id": "105323719753700941094",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bmcbb%40midnightfooddelivery-e7e7f.iam.gserviceaccount.com"
};

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig),
  databaseURL: "https://midnightfooddelivery-e7e7f.firebaseio.com"
});
const db = firebase.firestore();

app.get("/", (request, response) => {
 	 response.send("Hello World")
});

app.listen(process.env.PORT || 3000, () => { console.log("App is listening on port 3000"); });

//////  text testing
app.get('/text', (req,res)=>{
  console.log("got success text", req.query.id)
  res.status(200).json({
    messages: [
      {
        text:
          "This is a GET request. Please use POST if you want to actually do something..."
      }
    ]
  });
})

// testing
app.get('/location', (req,res)=>{
  console.log("got loca", req.query.loc)
  var loc = req.query.loc.split('/')[5]
   console.log("loca:", loc)
  res.status(200).json({
    messages: [
      {
        text:
          "...."
      }
    ]
  });
})

var help = {
	discount : "",
	delivery : "",
	totalPrice : "",
	totalCost : "",
}

// booking for meal
app.get('/booking', (req, res)=>{
  var total = req.query.total;
  var price = req.query.price;
  var order = req.query.order;
  var totalPrice = (total*price);

  if(total<3){ var delivery = 2000 }
  if(total>=3){ var delivery = 0  }

  if(total<5){ var discount = 0 }
  if(total>=5){ var discount = (price*20)/100 }

  var totalCost = (totalPrice-delivery-discount);
  help.totalCost = totalCost;	help.discount = discount;	help.delivery = delivery;	help.totalPrice = totalPrice;
  console.log("/booking reply: ", totalCost)

  res.status(200).json({
    "messages": [
      {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": `You have select ${order} for ${total} and the price will be (${totalPrice})Kyats. Delivery Fee : ${delivery} Kyats, Discount : ${discount} Kyats, Total Cost : ${totalCost} Kyats`,
            "buttons": [
              {
                "type": "show_block",
                "block_names": ["location0"],
                "title": "Confirm"
              },
               {
                "type": "show_block",
                "block_names": ["edit"],
                "title": "Edit"
              } 
            ]
          }
        }
      }
     ]
  	}
  )
})


app.get('/confirm', (req, res)=>{
  console.log("/confirm got confirm ", req.query.order, req.query.total, req.query.price)
  var totalPrice = (req.query.total*req.query.price); 
  var user_name = (`${req.query.first} ${req.query.last}`);
 //console.log(totalPrice, json.stringyfy(help), req.query.time, req.query.location)
  db.collection('Delivery').doc().set({
	    food: req.query.order,	
	    quantity : req.query.total,
	    price : req.query.price,
	    phone : req.query.phone,
	    location : req.query.location,	    
	    time : req.query.time,
	    user_id : req.query.id,
	    total_price: totalPrice,
	    discount : help.discount,
	    delivery_fee : help.delivery,
	    user_name : user_name, 
	    total_cost : help.totalCost,	    
	    paid : "no",	    
  }, {merge : true}).then(result=>{ console.log("successfully save data")})
  .then(error=>{console.log("err data saving for confirm:",error)})

  res.status(200).json({
    messages: [
      {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": `You have successfully order ${req.query.order} , ${req.query.total} meal, Total Cost ${help.totalCost}. For delvery, the time is ${req.query.time}, with the address, ${req.query.location} and to contact ${req.query.phone} `,
            "buttons": [
              {
                "type": "show_block",
                "block_names": ["receive Order"],
                "title": "Receive Order"
              },
               {
                "type": "show_block",
                "block_names": ["cancel Order"],
                "title": "Cancel Order"
              } 
            ]
          }
        }
      }
    ]    
  });
})
   
app.get('/receiveOrder', (req, res) => {
  var total = req.query.total;	var price = req.query.price; var order = req.query.order;
  console.log("/receiveOrder ", req.query.order, req.query.total, req.query.price);  
  
  db.collection('Delivery').where('paid', '==', 'no').where('quantity','==',`${req.query.total}`).where('food', '==', `${req.query.order}`).where('price','==',`${req.query.price}`).where('user_id','==',`${req.query.id}`).get()
   .then(success=>{
   		success.forEach(snapshot=>{
   			console.log("after receive the order.Doing db update ... ");   	  
   			db.collection('Delivery').doc(`${snapshot.id}`).update({ paid : "yes" }).then(suc=>{ console.log("successfully updated data") })
   		})
   	  
	  
   })

  res.status(200).json({
     messages: [
      {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": `You order has been arrived ${req.query.order} , ${req.query.total} meal, total price ${help.totalCost}.`,
            "buttons": [
              {
                "type": "show_block",
                "block_names": ["comment"],
                "title": "Comment"
              },
               {
                "type": "show_block",
                "block_names": ["rating"],
                "title": "Rating"
              } 
            ]
          }
        }
      }
     ]    
  });

})

app.get("/cancelOrder", (req, res)=>{
   db.collection('Delivery').where("paid", "==", "no").where("quantity", "==", `${req.query.total}`).where('user_id','==',`${req.query.id}`).get().then(result=>{   
     result.forEach(result=>{

     	db.collection('Delivery').doc(`${result.id}`).update({paid : "cancel"}).then(suc=>{
     		console.log("successfully rejected")
     	})

       res.status(200).json(
        {
        "messages": [
          {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "button",
                "text": `You have successfully cancel the order.`,
                "buttons": [
                  {
                    "type": "show_block",
                    "block_names": ["view Orders"],
                    "title": "View Orders"
                  },
                   {
                    "type": "show_block",
                    "block_names": ["menu"],
                    "title": "Back"
                  } 
                ]
              }
            }
          }
        ]
      }
      )
     })
   })
});

app.get("/viewOrders", (req, res)=>{
   db.collection('Delivery').where("paid", "==", "no").where("user_id", "==", `${req.query.id}`).get().then(result=>{
   	 if(result.empty){
   	 	  res.status(200).json(
	        {
	        "messages": [
	          {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `You have not ordered anything.`,
	                "buttons": [
	                  {
	                    "type": "show_block",
	                    "block_names": ["comment"],
	                    "title": "Comment Service"
	                  },
	                   {
	                    "type": "show_block",
	                    "block_names": ["order type"],
	                    "title": "Back"
	                  } 
	                ]
	              }
	            }
	          }
	        ]
	      }
	    );
   	 }
   	 else{
   	 	var array =[]
	    result.forEach(result=>{   
	      	var data = {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `You have select ${result.data().food} for ${result.data().quantity} and the total price will be (${result.data().total_cost})Kyats.`,
	                "buttons": [
	                  {
	                    "type": "show_block",
	                    "block_names": ["comment"],
	                    "title": "Give Comment"
	                  },
	                  {
	                    "type": "show_block",
	                    "block_names": ["cancel Order"],
	                    "title": "Cancel Order"
	                  } 
	                ]
	              }
	            }
	          };
	        array.push(data)
	    })

	       res.status(200).json(
	        {
	        "messages": array
	      	}
	      );
	 }

   })
});

app.get("/pastOrders", (req, res)=>{
   db.collection('Delivery').where("paid", "==", "yes").where('user_id','==',`${req.query.id}`).get().then(snapshot=>{
   	 if(snapshot.empty){
   	 	console.log("no data")
   	 	  res.status(200).json(
	        {
	        "messages": [
	          {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `You have not ordered.`,
	                "buttons": [
	                  {
	                    "type": "show_block",
	                    "block_names": ["comment"],
	                    "title": "Comment Service"
	                  },
	                   {
	                    "type": "show_block",
	                    "block_names": ["Menu"],
	                    "title": "Back"
	                  } 
	                ]
	              }
	            }
	          }
	        ]
	      }
	    );
   	 }
   	 else{
   	 	console.log("there is data")
   	 	var array = []
	    snapshot.forEach(result=>{   
	   		
	        var data =  {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `You had ordered ${result.data().food} for ${result.data().quantity}, the total price was (${result.data().total_cost})Kyats.`,
	                "buttons": [
	                  {
	                    "type": "show_block",
	                    "block_names": ["comment"],
	                    "title": "Give Comment"
	                  },
	                   {
	                    "type": "show_block",
	                    "block_names": ["Menu"],
	                    "title": "Back"
	                  } 
	                ]
	              }
	            }
	         };
	        array.push(data);
	    });

	       res.status(200).json(
	        {
	        "messages": array
	      	}
	    );

	 }

   })
});

app.get('/makeComment', (req, res)=>{
  console.log("/confirm got confirm ", req.query.order, req.query.total, req.query.price)
  var totalPrice = (req.query.total*req.query.price); 
  var user_name = (`${req.query.first} ${req.query.last}`);  
 //console.log(totalPrice, json.stringyfy(help), req.query.time, req.query.location)
  db.collection('Comment').doc().set({	    
	    time : req.query.time,
	    user_id : req.query.id,	    
	    user_name : user_name, 	  
	    star : req.query.star,
	    comment : req.query.comment  
  }, {merge : true}).then(result=>{ console.log("successfully save comment data")})
  .then(error=>{console.log("err data saving for confirm:",error)})
})

app.get('/showComment', (req,res)=>{
	db.collection('Comment').get().then(query=>{
		if(query.empty){
			res.status(200).json({
				"message": [
					{"text": "There is no comment."}
				]
			})
		}
		else{
			var array = []
			query.forEach(querySnapShot=>{
				var data = {
					"text" : `${querySnapShot.data().comment} - ${querySnapShot.data().user_name}. Rating :${querySnapShot.data().star}`,
					"quick_replies": [
				        {
				          "title":"Back",
				          "type": "show_block",
       			     	  "block_names": ["Menu"],
				        }
				     ]
				}
				array.push(data);
			});
			
			res.status(200).json(
		    {
		   	    "messages": array
		    })
		}; 
	})
})

app.get("/home", (req, res)=>{
	var id=req.query.id;
	if(id=="2790823294363044" || id=="2266234073476820"){
		console.log("admin reply")
   	 	  res.status(200).json(
	        {
	        "messages": [
	          {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `Go to admin site.`,
	                "buttons": [
	                  {
	                    "type": "show_block",
	                    "block_names": ["admin home"],
	                    "title": "Show Admin Site"
	                  } 
	                ]
	              }
	            }
	          }
	        ]
	      }
	    );
   	}
   	else{
   		console.log("not admin", id);
  	}
   	 
});

app.get("/adminHome", (req, res)=>{
	res.status(200).json({
				    "messages": [{
				        "attachment": {
				        "type": "template",
			            "payload": {
				                "template_type": "button",
				                "text": `Hi Admin. Show delivery or show comment?`,
				                "buttons": [
				                  {				                  					                  	
				                    "type": "show_block",
				                    "block_names": ["admin delivery"],
				                    "title": "Show Delivery"
				                  },
				                  {				                  					                  	
				                    "type": "show_block",
				                    "block_names": ["admin comment"],
				                    "title": "Show Comment"
				                  }  ,
				                  {				                  					                  	
				                    "type": "show_block",
				                    "block_names": ["admin logout"],
				                    "title": "Logout from admin"
				                  }
				                ]
				              }
				        }
				    }]
				});
})

app.get("/adminDelivery", (req, res)=>{
	console.log("view delivery");
	var id=req.query.id;

	db.collection('Delivery').where("paid", "==", "no").get().then(doc=>{
		if(doc.empty){
			res.status(200).json({
				"messages": [
		          {
		            "attachment": {
			            "type": "template",
			            "payload": {
				        "template_type": "button",
				        "text": `You have no orders for delivery.`,
				        "buttons": [{
				            "type": "show_block",
		                    "block_names": ["admin logout"],
				            "title": " Logout"
				        	}]
				        }
				     },			     
			       "quick_replies": [
			        {
			         "title": "Back",
			         "type": "show_block",
       			     "block_names": ["admin home"],
			        }, 
			       
			      ]		    
				}
				]
			});
		}
		else{
      var messagedata = []
			doc.forEach(data=>{			
     		  	    var data ={
				          "attachment": {
				          "type": "template",
			            "payload": {
				                "template_type": "button",
				                "text": `You have delivery for ${data.data().food}, ${data.data().quantity} and the total price is (${data.data().total_cost})Kyats. Name - ${data.data().user_name}, Location - ${data.data().location}, Phone - ${data.data().phone}`,
				                "buttons": [
				                  {				                  	
				                  	"set_attributes": {								      	
								      	"doc_id": `${data.id}` },
				                    "type": "show_block",
				                    "block_names": ["admin delivery done"],
				                    "title": "Done Delivery"
				                  } 
				                ]
				          }
				        }
				    };
        			messagedata.push(data);
			});
     
      	res.status(200).json({
				    "messages": messagedata
				});
			   	 	
		}
				
	})
   	 
});

app.get("/adminDeliveryDone", (req, res)=>{
	var id=req.query.id;
	var doc_id=req.query.doc;	
	
		db.collection('Delivery').doc(`${doc_id}`).update({paid : "yes"}).then(doc=>{
			console.log("the delivery is finsih");

				res.status(200).json({
				    "messages": [{
				        "attachment": {
				        "type": "template",
			            "payload": {
				                "template_type": "button",
				                "text":"The delivery is finish. Click button to continue.",
				                "buttons": [
				                 {				                  
				                    "type": "show_block",
				                    "block_names": ["admin delivery"],
				                    "title": "Done Delivery"				                  
				                 },
				                 {				                  
				                    "type": "show_block",
				                    "block_names": ["admin home"],
				                    "title": "Back To Admin"				                  
				                }
				                ]
				              }
				        }
				    }]
				});	
		})		
   	 
})

app.get("/adminComment", (req, res) => {
	var id=req.query.id;	
	db.collection('Comment').get().then(snapshot=>{
		console.log("/adminComment showing comment.");
		var array = [];
		snapshot.forEach(doc=>{ 				
			if( doc.data().star==undefined || doc.data().star=="undefined" || doc.data().star==null ){
				doc.data().star= "none"
			}

				var data = {
	            "attachment": {
	              "type": "template",
	              "payload": {
	                "template_type": "button",
	                "text": `${doc.data().comment} by ${doc.data().user_name} - Rating: ${doc.data().star}`,
	                "buttons": [
	                  {
	                  	"set_attributes": {								      	
								      	"comment_id": `${doc.id}` },
	                    "type": "show_block",
	                    "block_names": ["comment delete"],
	                    "title": "Delete Comment"
	                  }	                 
	                ]
	              }
	            },
	            "quick_replies": [
					        {
					          "title": "Go Back",		
					          "type": "show_block",
       			  			  "block_names": ["admin home"],			          
					        }
				]
	          };
				     
			array.push(data)


		})
			res.status(200).json({
				    "messages": array
				});	
	})		

})

app.get("/commentDelete",(req, res)=>{
	var comment = req.query.comment;
	db.collection('Comment').doc(`${comment}`).delete().then(snapshot=>{
		console.log("delete comment success")
	})	

}) 

app.get('/gallery', (req,res)=>{
  const name = req.query
  console.log("got success gallery", name )
  res.status(200).json(
  {
  "messages": [
    {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
             
              "title":"Chatfuel Rockets Jersey",
              "image_url":"https://rockets.chatfuel.com/assets/shirt.jpg", 
              "buttons": [
                {
                  "title": "Go to Chatfuel!",
                  "type": "web_url",
                  "url": "https://chatfuel.com/"
                }
              ]
            }
          ]
        }
    },
    "quick_replies": [
        {
          "title": "That's cool!",
          "set_attributes": {
            "feedback": "Cool!"
          }
        }
        ]
    }
  ]
} 
  )
})



// EAAGmDbjwkJABAHMPQjtkBXhBAMMZBl6OLQ7I6nBESO0aVc0h09WkvfjryNRTNyC5YIeMYcKffOmQsF9Y7upyZAu6UaFHSngEQW7wB6ZBGENhH0XvRLckexemwUGcWfyriRqoNZBJ8QVqXOhy4BpRiHTZB7JF3XVV2EwtpFBIEqRCLb75YDnlDF8ClEp9Ivta8DZChdQsBz2ZCRSEPZAlrTPoOLEYJwzgz4MZD
// EAAGmDbjwkJABAHMPQjtkBXhBAMMZBl6OLQ7I6nBESO0aVc0h09WkvfjryNRTNyC5YIeMYcKffOmQsF9Y7upyZAu6UaFHSngEQW7wB6ZBGENhH0XvRLckexemwUGcWfyriRqoNZBJ8QVqXOhy4BpRiHTZB7JF3XVV2EwtpFBIEqRCLb75YDnlDF8ClEp9Ivta8DZChdQsBz2ZCRSEPZAlrTPoOLEYJwzgz4MZD