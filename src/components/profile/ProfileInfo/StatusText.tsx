import React, {ChangeEvent} from 'react';

type StatusTextType = {
    status: string
    updateStatus: (status: string) => void
}

class StatusText extends React.Component<StatusTextType> {
    state = {
        editToggle: false,
        status: this.props.status
    }

    onDoubleClickHandler = () => {
        this.setState({
            editToggle: true
        })
    }

    onBlurHandler = () => {
        this.setState({
            editToggle: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<StatusTextType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                state:this.props.status
            })
        }
    }

    render() {


        return (
            <>
                {this.state.editToggle ?
                    <input autoFocus onBlur={this.onBlurHandler} onChange={this.onChangeHandler}
                           value={this.state.status} type="text"/> :
                    <span
                        onDoubleClick={this.onDoubleClickHandler}>{this.props.status ? this.props.status : "------"}</span>}
            </>
        );
    }
}

export default StatusText;