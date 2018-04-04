module.exports = {
    getUsers: (req,res)=>{
        const db = req.app.get('db');
        db.read_users()
        .then(user=>{res.send(user)
        })
        .catch(err=>console.error(err))
    },

    login: (req,res,next)=>{
        const db = req.app.get('db');
        const {username, password} = req.body;
       
        db.read_user([username])
            .then(user => {
                    if (user[0].password == password) {
                        req.session.user.password = user[0].password;
                        req.session.user.username = user[0].username;
                       
                        //may exclude below
                        db.read_property([user[0].username])
                            .then(property=>{  
                                req.session.user.property=property;
                                console.log('loginuserlog',req.session.user);
                                res.status(200).send(req.session.user)
                            })
                            .catch(err=>console.error(err));
                        //may exclude above

                        
                    } else {
                        res.status(403).send('wrong password')
                        }
            })
            .catch((err)=>console.error(err)
            )   
    },

    getProperty: (req,res)=>{
        console.log('getpropertysessionuser',req.session.user);
        const db = req.app.get('db');
        db.read_property([req.session.user.username])
        .then(property=>{  
            req.session.user.property=property;
            
            res.status(200).send(property);
        })
        .catch(err=>console.error(err))
    },

    register: (req,res,next)=>{
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.create_user([username,password])
        .then(user=>{
                req.session.user.password = password;
                req.session.user.username = username;
                
                res.status(200).send(req.session.user);
                
        })
        .catch(err=>console.error(err)
        )
    },
    
    logout: (req,res,next)=>{
        req.session.destroy();
        res.status(200).send(req.session)        
    },


    addProperty: (req,res)=> {
        const db = req.app.get('db');
        const {username, propertynm, propertydsc, address, city, state, zip, imageurl, loanamt, monthlymortgageamt, desiredrent} = req.body;

        db.create_property([username, propertynm, propertydsc, 
            address, city, state, zip, imageurl, loanamt, monthlymortgageamt, desiredrent])
        .then(property=> {

                db.read_property([username])
                        .then(property=>{
                            req.session.user.property=property;
                            res.status(200).send(property);
                            })
                        .catch(err=>console.error(err))
                        ;
           
            // console.log(req.session.user);
        })
        .catch((err)=>console.error(err)
        )
    },

    deleteProperty: (req,res)=> {
        const db = req.app.get('db');
        const {username} = req.session.user;
        
        db.delete_property([req.body.id])//req.session.user.property.id])
        .then(
            property=> {
                db.read_property([username])
                        .then(property=>{
                            req.session.user.property=property;
                            res.status(200).send(req.session.user.property);
                            })
                        .catch(err=>console.error(err))
                        ;
        })
        .catch(err=>console.error(err))
    }

}