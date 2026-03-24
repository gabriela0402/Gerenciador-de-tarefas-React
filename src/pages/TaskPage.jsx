import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    function onBackClick(){
        navigate(-1);
    }
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
        <div className="w-[500px] space-y-4">
            <div className="flex items-center relative mb-6">
            <button className="absolute left-0 text-slate-100" onClick={onBackClick}>
                <ChevronLeftIcon />
            </button>
            <Title>Detalhes da Tarefa </Title>
            </div>

            <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl text-white font-bold text-slate-700">
                {title}
            </h2>
            <p className="text-slate-600">{description}</p>
            </div>
        </div>
        </div>
    );
    }
export default TaskPage;
