export class UsuarioModels
{
 public ID_usuario: number=0;

public  UserName : string="";

public Email : string="";

public Clave : string="";

public Nombre : string="";

public Apellido : string="";

public DNI : number=0;

public Telefono : string="";

public Localidad : string="";//es number en C#!!! ver

public TipoUsuario : number=0;

public Estado : number=0;

public Fecha_Nac : string="";

  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
}


export class  LoginRequest {
  UserName:string="";
  Clave:string="";
  Token?: string;
}








