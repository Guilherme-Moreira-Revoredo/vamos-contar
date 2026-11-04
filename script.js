function contando() {
  var iinicio = window.document.querySelector(`input#iinicio`)
  var ifim = window.document.querySelector(`input#ifim`)
  var ipasso = window.document.querySelector(`input#ipasso`)
  var res = window.document.querySelector(`div#res`)

  if (
    iinicio.value.length == 0 ||
    ifim.value.length == 0 ||
    ipasso.value.length == 0
  ) {
    window.alert(`[Erro] Faltam dados!`)
    res.innerHTML = `Impossivel contar`
  } else {
    let i = Number(iinicio.value)
    let f = Number(ifim.value)
    let p = Number(ipasso.value)

    if (p <= 0) {
      window.alert(`[Erro] Passo inválido! Considerando que PASSO 1 `)
      p = 1
    }

    res.innerHTML = `Contando: `

    /*contagem crescente */ if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    } /*contagem regressiva */ else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }

    res.innerHTML += ` \u{1f3c1}`
  }
}
