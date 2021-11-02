import './ActivityLog.css';

function ActivityLog(props) {
  return (
    <div className="ActivityLog">
        <span className="ActivityLog-Title">Activity Log</span>
          <ul className="ActivityLog-List">
            {/* This is basically a for loop over the array */}
              {props.activities.map(function(activity, i){
                  return <li className="ActivityLog-ListItem">{activity}</li>;
            })}
        </ul>
    </div>
  );
}

export default ActivityLog;