interface ICreatedManagerUser {
  mn_name: string;
  mn_last_name: string;
  mn_phone: string;
  mn_email: string;
  mn_pass: string;
}
export class CreatedManagerUser implements ICreatedManagerUser {
  constructor(
      public  mn_name: string = '',
      public  mn_last_name: string = '',
      public  mn_phone: string = '',
      public  mn_email: string = '',
      public  mn_pass: string = ''
  ) {

  }
}

// {"tag":"register_manager_user", "token":"gdf;gk;dfgl;", "manager_user":{"mn_name":"name", "mn_last_name":"lasst", "mn_phone":"12345678", "mn_email":"email@fdsfs.com", "mn_pass":"qwerty123"}}
