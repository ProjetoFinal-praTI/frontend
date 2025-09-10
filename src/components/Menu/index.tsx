import { GraduationHatIcon } from "../Icons/GraduationHat"

export const Menu = () => {
    return (
      <menu className="rounded-b-2xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="flex rounded-2xl justify-center items-center h-10 w-10 bg-gradient-to-br from-primary to-secondary">
              <GraduationHatIcon stroke="white"/>
            </div>
            <div>
                <h1 className="text-xl font-bold text-black">EduGamefy</h1>
                <p className="text-sm text-gray">Classroom Gamification</p>
            </div>
          </div>
      </menu>
    );
}