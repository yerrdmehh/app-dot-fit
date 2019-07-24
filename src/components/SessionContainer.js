import React from 'react';
import Paper from '@material-ui/core/Paper';
import PR from './PR';
import SessionDialog from './SessionDialog';
import '../styles/SessionContainer.css';

class SessionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { sessionArr: [] };
		this.addSession = this.addSession.bind(this);
	};
	addSession(newSession) {
		this.setState({
			sessionArr: [...this.state.sessionArr, newSession]
		});
	};

	render() {
		const sessions = this.state.sessionArr.map(
			(s, i) => <PR key={i} exercise={s.exercise} reps={s.reps} />
		);
		return (
			<Paper elevation={3} className='SessionContainer'>
				<SessionDialog addSession={this.addSession} />
				<div className='Cards'>{sessions}</div>
			</Paper>
		);
	}
}

export default SessionContainer;

//TODO
// save logs in localStorage
// save logs to database (research serverless)
// move styles to their own components