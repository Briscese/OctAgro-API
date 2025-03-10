import React, { useState } from "react"

import { useForm } from "react-hook-form"

// IMPORTANDO COMPONENTES
import { Modal } from "../../Modal/Modal"

import styles from "./FormCadastroProduto.module.css"

// IMPORTANDO ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"

export const FormCadastroProduto = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // MODAL

  const [openModalRegra, setOpenModalRegra] = useState(false)
  const [openModalProduto, setOpenModalProduto] = useState(false)

  // CHECKBOX REGRAS RECEBEDOR

  const [checkboxColoracao, setCheckboxColoracao] = useState(false)
  const [checkboxOdor, setCheckboxOdor] = useState(false)
  const [checkboxAusenciaAnimais, setCheckboxAusenciaAnimais] = useState(false)
  const [checkboxAusenciaMofo, setCheckboxAusenciaMofo] = useState(false)

  // CHECKBOX REGRAS ANALISTA

  const [checkboxQualidade, setCheckboxQualidade] = useState(false)
  const [checkboxFormato, setCheckboxFormato] = useState(false)
  const [checkboxNA, setCheckboxNA] = useState(false)
  const [checkboxImpurezas, setCheckboxImpurezas] = useState(false)

  // INSERIR VALORES

  const [radioInserirValores, setRadioInserirValores] = useState(false)
  const [radioNaoInserirValores, setRadioNaoInserirValores] = useState(true)

  // MODAL

  const handleOpenModalRegra = () => {
    setOpenModalRegra(true)
  }

  const handleOpenModalProduto = () => {
    setOpenModalProduto(true)
  }

  // CHECKBOX REGRAS RECEBEDOR

  const handleCheckboxColoracao = () => {
    setCheckboxColoracao(!checkboxColoracao)
  }

  const handleCheckboxOdor = () => {
    setCheckboxOdor(!checkboxOdor)
  }

  const handleCheckboxAusenciaAnimais = () => {
    setCheckboxAusenciaAnimais(!checkboxAusenciaAnimais)
  }

  const handleCheckboxAusenciaMofo = () => {
    setCheckboxAusenciaMofo(!checkboxAusenciaMofo)
  }

  // CHECKBOX REGRAS ANALISTA

  const handleCheckboxQualidade = () => {
    setCheckboxQualidade(!checkboxQualidade)
  }

  const handleCheckboxFormato = () => {
    setCheckboxFormato(!checkboxFormato)
  }

  const handleCheckboxNA = () => {
    setCheckboxNA(!checkboxNA)
  }

  const handleCheckboxImpurezas = () => {
    setCheckboxImpurezas(!checkboxImpurezas)
  }

  // FECHAR MODAL
  const handleCloseModalRegra = () => {
    setOpenModalRegra(false)
  }

  // RADIO INSERIR VALORES

  const handleRadioInserirValores = () => {
    setRadioInserirValores(!radioInserirValores)
    setRadioNaoInserirValores(false)
  }

  const handleRadioNaoInserirValores = () => {
    setRadioNaoInserirValores(!radioNaoInserirValores)
    setRadioInserirValores(false)
  }

  return (
    <div className={styles.external}>
      <form className={styles.formCadastroProduto}>
        <div>
          <h1 className={styles.title}>CADASTRO NOVO PRODUTO</h1>
        </div>
        <div>
          <legend>Dados de Identificação</legend>
          <hr />
          <fieldset>
            <div>
              <label>
                ID:
                <input className={styles.inputCadastroProduto} type="number" name="id" />
              </label>
              <label>
                Data:
                <input className={styles.inputCadastroProduto} type="date" name="data" />
              </label>
            </div>
            <div>
              <label>
                Nome do Produto:
                <input className={styles.inputCadastroProduto} type="text" name="nomeproduto" />
              </label>
            </div>
            <div>
              <label>
                Tipo:
                <input className={styles.inputCadastroProduto} type="text" name="tipo" />
              </label>
              <label>
                Descrição:
                <input className={styles.inputCadastroProduto} type="text" name="descricao" />
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <legend className={styles.subTitle}>Regras de Aceitação</legend>
          <hr />
          <div className={styles.row}>
            <div className={styles.leftSide}>
              <fieldset>
                <legend>Regras - Recebedor</legend>
                <div>
                  <input className={styles.inputCadastroProduto} value="Coloração" readOnly />
                  <input
                    type="checkbox"
                    id="checkboxColoracao"
                    className={styles.checkAprovar}
                    {...register("checkboxColoracao")}
                    checked={checkboxColoracao}
                    onClick={handleCheckboxColoracao}
                  />
                </div>
                <div>
                  <input className={styles.inputCadastroProduto} value="Odor" readOnly />
                  <input
                    type="checkbox"
                    id="checkboxOdor"
                    className={styles.checkAprovar}
                    {...register("checkboxOdor")}
                    checked={checkboxOdor}
                    onClick={handleCheckboxOdor}
                  />
                </div>
                <div>
                  <input
                    className={styles.inputCadastroProduto}
                    value="Ausência de Insetos vivos/mortos"
                    readOnly
                  />
                  <input
                    type="checkbox"
                    id="checkboxAusenciaAnimais"
                    className={styles.checkAprovar}
                    {...register("checkboxAM")}
                    checked={checkboxAusenciaAnimais}
                    onClick={handleCheckboxAusenciaAnimais}
                  />
                </div>
                <div>
                  <input className={styles.inputCadastroProduto} value="Ausência de Mofo" readOnly />
                  <input
                    type="checkbox"
                    id="checkboxAM"
                    className={styles.checkAprovar}
                    {...register("checkboxAusenciaMofo")}
                    checked={checkboxAusenciaMofo}
                    onClick={handleCheckboxAusenciaMofo}
                  />
                </div>
              </fieldset>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.inserirRegra} onClick={handleOpenModalRegra}>
                <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
                <p className={styles.paragrafoRegra}>INSERIR NOVA REGRA</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <legend>Regras - Analista</legend>
          <hr />
          <fieldset>
            <div>
              <input className={styles.inputCadastroProduto} value="Qualidade" readOnly />
              <input
                type="checkbox"
                id="checkboxQualidade"
                className={styles.checkAprovar}
                {...register("checkboxQualidade")}
                checked={checkboxQualidade}
                onClick={handleCheckboxQualidade}
              />
            </div>
            <div>
              <input className={styles.inputCadastroProduto} value="Formato" readOnly />
              <input
                type="checkbox"
                id="checkboxFormato"
                className={styles.checkAprovar}
                {...register("checkboxFormato")}
                checked={checkboxFormato}
                onClick={handleCheckboxFormato}
              />
            </div>
            <div>
              <input className={styles.inputCadastroProduto} value="Nível de Agrotóxicos" readOnly />
              <input
                type="checkbox"
                id="checkboxNA"
                className={styles.checkAprovar}
                {...register("checkboxNA")}
                checked={checkboxNA}
                onClick={handleCheckboxNA}
              />
              <label className={styles.maxLabel}>
                Máx.
                <input type="text" className={styles.porcentagem} maxLength="3" />
              </label>
              %
            </div>
            <div>
              <input className={styles.inputCadastroProduto} value="Impurezas" readOnly />
              <input
                type="checkbox"
                id="checkboxImpurezas"
                className={styles.checkAprovar}
                {...register("checkboxImpurezas")}
                checked={checkboxImpurezas}
                onClick={handleCheckboxImpurezas}
              />
              <label className={styles.maxLabel}>
                Máx.
                <input type="text" className={styles.porcentagem} maxLength="3" />
              </label>
              %
            </div>
            <input type="submit" value="CADASTRAR" onClick={onClick} className={styles.botaoConfirmarModal} />
          </fieldset>
        </div>
      </form>
      <div>
        <Modal isOpen={openModalRegra} onClick={handleCloseModalRegra}>
          <div className={styles.conteudoModalRegra}>
            <div className={styles.tituloModal}>
              <p>Nova regra de aceitação</p>
            </div>
            <div className={styles.usuarioModal}>
              <label>
                Usuário:
                <br />
                <select className={styles.inputModal}>
                  <option value="Recebedor">Recebedor</option>
                  <option value="Analista">Analista</option>
                </select>
              </label>
            </div>
            <div className={styles.descricaoModal}>
              <label>
                Descrição:
                <br />
                <input type="text" className={styles.inputModal} />
              </label>
            </div>
            <div className={styles.inserirModal}>
              <label className={styles.radioModal}>
                Inserir valores?
                <label className={styles.radioModal}>
                  Sim
                  <input
                    type="radio"
                    id="radioInserirValores"
                    className={styles.radioModal}
                    {...register("radioInserirValores")}
                    checked={radioInserirValores}
                    onClick={handleRadioInserirValores}
                  />
                </label>
                <label className={styles.radioModal}>
                  Não
                  <input
                    type="radio"
                    id="radioNaoInserirValores"
                    className={styles.radioModal}
                    {...register("radioNaoInserirValores")}
                    checked={radioNaoInserirValores}
                    onClick={handleRadioNaoInserirValores}
                  />
                </label>
              </label>
            </div>
            <div>
              {radioInserirValores && (
                <label>
                  Valores:
                  <div>
                    <label>
                      Máx.
                      <input type="text" className={styles.porcentagem} min="0" max="100" />
                    </label>
                    %
                  </div>
                </label>
              )}
            </div>
            <input
              className={styles.botaoConfirmarModal}
              type="button"
              value="CADASTRAR"
              onClick={handleOpenModalRegra}
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}
