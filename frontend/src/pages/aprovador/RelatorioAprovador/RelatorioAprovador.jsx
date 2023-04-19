import React from "react"

// importando os componentes
import { SidebarAprovador } from "../../../components/sidebar/SidebarAprovador/SidebarAprovador"
import { TabelaRelatorios } from "../../../components/TabelaRelatorios/TabelaRelatorios"
import { HeaderAprovador } from "../../../components/header/HeaderAprovador/HeaderAprovador"

// Imagem para simular o Icone do usuário
import UserImg from "../../../assets/UserImg.webp"

// importando o CSS do module.css
import styles from "./RelatorioAprovador.module.css"

export const RelatorioAprovador = () => {
  return (
    <div className={styles.main}>
      <SidebarAprovador
        nome="Thiago Zani"
        funcao="Aprovador"
        imagem={UserImg}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderAprovador arrow="True" link="/aprovador/home" />
        </div>

        <div className={styles.content}>
          <TabelaRelatorios
            numeroPedido="1001"
            descricao="Café"
            situacao="Aceito"
            funcionario="Thiago Zani"
          />
        </div>
      </div>
    </div>
  )
}
