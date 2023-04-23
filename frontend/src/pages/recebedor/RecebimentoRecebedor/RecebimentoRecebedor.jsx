import React from "react"

// IMPORTANDO COMPONENTES
import { SidebarRecebedor } from "../../../components/sidebar/SidebarRecebedor/SidebarRecebedor"
import { HeaderRecebedor } from "../../../components/header/HeaderRecebedor/HeaderRecebedor"

import { TabelaMercadoriasRecebedor } from "../../../components/TabelaMercadorias/TabelaMercadoriasRecebedor/TabelaMercadoriasRecebedor"

// IMAGEM USADA PARA FINS DE TESTE (SIDEBAR)
import UserImg from "../../../assets/UserImg.webp"

// IMPORTANDO CSS
import styles from "./RecebimentoRecebedor.module.css"

export const RecebimentoRecebedor = () => {
  return (
    <div className={styles.main}>
      <SidebarRecebedor nome="Leandro Luz" funcao="Recebedor" imagem={UserImg} />

      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderRecebedor arrow="True" link="/recebedor/home" />
        </div>

        <div className={styles.content}>
          <TabelaMercadoriasRecebedor
            numeroPedido="1001"
            fornecedor="Coffelicious"
            tipoCarga="Café"
            estado="Aceito"
          />
        </div>
      </div>
    </div>
  )
}
