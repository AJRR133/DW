use("Peliculas");
//2 db.estudiantes.find()
//3 db.estudiantes.find().sort({name:1})
//4 db.estudiantes.find().sort({score:1,name:-1})
//5 
db.estudiantes.find({_id: ObjectId('22')})