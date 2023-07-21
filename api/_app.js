import Sidebar from "@/components/Sidebar"
import "@styles./globals.css"


export default function App ({ Component, pagesProps}) {
    return (
  
        <Component {...pagesProps}/>
  
    );
}