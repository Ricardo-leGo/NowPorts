CREATE TABLE Usuarios(
	
    Id int not null auto_increment primary key,
	UserName varchar(120) not null,
	LastName varchar(120) not null, 
    CodeArea int not null,
    Phone varchar(10) not null, 
    Activo bit not null default 0,
    CP text,
    Comments text ,
    CreatedAt timestamp DEFAULT current_timestamp,
    Pass text not null,
    Description text,	
    IsRegistered BIT NOT NULL DEFAULT 0,
    Correo varchar(120) not null
    
);



CREATE TABLE Agenda(

	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	IdOwner INT NOT NULL,
	FechaInicio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UsuariosIdFK text, 
	Activa BIT NOT NULL DEFAULT 1,
	FOREIGN KEY ( IdOwner ) REFERENCES Usuarios(Id)
		
);

CREATE TABLE Agenda_Usuario(	
	IdUsuarioFK int not null,
    IdAgendaFK int not null,
	FOREIGN KEY (IdUsuarioFK) REFERENCES Usuarios(Id),
    FOREIGN KEY (IdAgendaFK ) REFERENCES Agenda(Id)
);

