import { Button } from "@/components/Buttons/Button";
import { Menu } from "@/components/Menu"

export const Home = () => {
    return (
      <div>
        <Menu />
        <div className="flex flex-col gap-4 w-fit justify-center items-center p-30">
          <Button label="Cadastrar" variant="primary" />
          <Button label="Cadastrar" variant="secondary" />
          <Button label="Cadastrar" variant="outline" />
          <Button label="Cadastrar" variant="destructive" />
        </div>
      </div>
    );
   
}