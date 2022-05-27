import { Converter } from "./converter";

export interface Diario {
    id?: string; //stringo aleatória
    titulo: string;
    corpo: string;
    local: string;
    data: Date;  //data da viagem realizada
    imagem?: string; //link da imagem, ? = opcional,
      // serão preenchidas programaticamente
    createdAt: Date; // guarfa o dia que o diario foi criado
    usuarioId?: string; // informação que vai ser preenchida depois
    usuarionick?: string;
    usuarioNome?: string;
}

export const DiarioConverter: Converter<Diario> = {
    toFirestore: (data) => data, // ao ennviar eu não quero alterar o objeto
    fromFirestore: (snapshot, options) => {
        //extrai o objeto de dados do documento
        const obj = snapshot.data(options)!;
        return{
            ...obj,
            data: obj ['data']?.date(),
            createdAt: obj['createdAt']?.date(),
        }as Diario;
    }
}
