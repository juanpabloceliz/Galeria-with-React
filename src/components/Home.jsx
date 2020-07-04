import React from "react"

export default class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      await fetch("https://picsum.photos/v2/list")
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          console.log(response)
          const data = response
          this.setState({ loading: false, data: data })
        })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading === true) {
      return "Loading..."
    }

    return (
      <div>
        <div className="img">
          <h1>hi</h1>
        </div>
      </div>
    )
  }
}
