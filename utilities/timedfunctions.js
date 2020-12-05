const pusher = require('../utilities/pusher')


exports.triggerWinner =()=>{
    setTimeout(()=>{
        console.log("winner calculation")
        const sorted_users_by_score = g_users.sort((a, b) => b.score - a.score)
        const top_3_users = sorted_users_by_score.slice(0, 2);
        pusher.trigger("my-channel", "winner", {
            message:"winner",
            winners:top_3_users

        })
        console.log("winners list",sorted_users_by_score)
    },(g_question_timing * (g_question_count + 1))+ g_trigger_delay)
}

exports.timedQuestions = (question,index)=>{
    setTimeout(()=>{
        Object.assign(question,index)
        console.log("triggeded",question)
        pusher.trigger("my-channel", "my-event", question)
    },index * g_question_timing)
}