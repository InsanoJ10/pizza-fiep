import { useState } from "react";
export default function Contato(){
    const [nome, setNome] = use ('');
    const [email, setEmail] = use ('');
    const [mensagem, setMensagem] = use ('');


    const enviarWhatsapp = (e) =>{
        e.preventDefault;
        const telefone ='5541990099999';
        const texto = `Óla\nMeu nome é ${nome}\nMeu email é ${email}\nMensagem ${mensagem}`
        const textoCodificado = EncodedURIComponent(texto);
        const whwhatsappURL = `https://wa.me/${telefone}?text=${textoCodificado}`
    }
}