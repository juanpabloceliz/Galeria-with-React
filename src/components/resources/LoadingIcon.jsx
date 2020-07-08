import React from "react"
import "../../assets/LoadingIcon.scss"

// simplemente el ícono de carga más sus estilos

export default function LoadingIcon() {
  return (
    <div className="loading__icon">
      <img src="https://i.imgur.com/LYCRl9y.png" alt="LOADING..." />
    </div>
  )
}
