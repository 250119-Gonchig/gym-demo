import React, { useState } from 'react';

export default function GymAppDemo() {
  // Сонгогдсон булчинг хадгалах state
  const [selectedMuscle, setSelectedMuscle] = useState('Chest');
  // Хулгана дээгүүр нь гүйх үеийн state (hover эффект)
  const [hoveredMuscle, setHoveredMuscle] = useState(null);

  const muscles = [
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    'Legs',
    'Core',
  ];

  const exercises = [
    { name: 'Bench Press', muscle: 'Chest', weight: '80kg', reps: '10 reps' },
    { name: 'Incline Dumbbell Press', muscle: 'Chest', weight: '24kg', reps: '12 reps' },
    { name: 'Push Ups', muscle: 'Chest', weight: 'Bodyweight', reps: '20 reps' },
  ];

  // Булчин идэвхтэй (сонгогдсон эсвэл hover хийгдсэн) байгааг шалгах функц
  const isActive = (muscleName) => selectedMuscle === muscleName || hoveredMuscle === muscleName;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans pb-32">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Gym Tracker</h1>
            <p className="text-zinc-400 text-sm mt-1">Track your workouts smarter</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-red-500/20">
            G
          </div>
        </div>

        {/* Anatomy Detail Card */}
        <div className="bg-zinc-900 rounded-3xl p-5 shadow-lg border border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Today Workout</h2>
            <span className="text-red-400 text-sm font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              {selectedMuscle} Day
            </span>
          </div>

          {/* Хүн дүрстэй интерактив хэсэг */}
          <div className="h-80 rounded-2xl bg-zinc-950 flex flex-col items-center justify-center border border-zinc-800 p-4 relative overflow-hidden">
            <div className="text-zinc-500 mb-2 text-xs uppercase tracking-wider font-semibold">
              Interactive Anatomy (Hover/Tap)
            </div>

            <svg
              viewBox="0 0 200 320"
              className="w-full h-56 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Толгой ба Хүзүү */}
              <g className="transition-all duration-300 origin-[100px_36px]">
                <path d="M100,20 C108,20 112,28 112,36 C112,46 106,52 100,52 C94,52 88,46 88,36 C88,28 92,20 100,20 Z" fill="#3f3f46" />
                <path d="M96,52 L104,52 L105,60 L95,60 Z" fill="#27272a" />
              </g>

              {/* МӨР (Shoulders) */}
              <g 
                onClick={() => setSelectedMuscle('Shoulders')}
                onMouseEnter={() => setHoveredMuscle('Shoulders')}
                onMouseLeave={() => setHoveredMuscle(null)}
                className="cursor-pointer transition-all duration-300 origin-[100px_80px]"
                style={{ transform: isActive('Shoulders') ? 'scale(1.15)' : 'scale(1)' }}
              >
                {/* Баруун мөр */}
                <path d="M74,66 C70,68 62,75 62,85 C62,92 68,96 72,94 C76,88 78,76 74,66 Z" fill={isActive('Shoulders') ? '#ef4444' : '#3f3f46'} />
                {/* Зүүн мөр */}
                <path d="M126,66 C130,68 138,75 138,85 C138,92 132,96 128,94 C124,88 122,76 126,66 Z" fill={isActive('Shoulders') ? '#ef4444' : '#3f3f46'} />
              </g>

              {/* ЦЭЭЖ (Chest) */}
              <g 
                onClick={() => setSelectedMuscle('Chest')}
                onMouseEnter={() => setHoveredMuscle('Chest')}
                onMouseLeave={() => setHoveredMuscle(null)}
                className="cursor-pointer transition-all duration-300 origin-[100px_80px]"
                style={{ transform: isActive('Chest') ? 'scale(1.2)' : 'scale(1)' }}
              >
                <path d="M76,68 C88,65 100,66 100,66 C100,66 112,65 124,68 C126,82 120,95 101,95 L100,95 C80,95 74,82 76,68 Z" fill={isActive('Chest') ? '#ef4444' : '#52525b'} filter={isActive('Chest') ? "drop-shadow(0 0 8px #ef4444)" : ""} />
                <line x1="100" y1="66" x2="100" y2="94" stroke="#27272a" strokeWidth="1.5" />
              </g>

              {/* ХЭВЛИЙ (Core / Abs) */}
              <g 
                onClick={() => setSelectedMuscle('Core')}
                onMouseEnter={() => setHoveredMuscle('Core')}
                onMouseLeave={() => setHoveredMuscle(null)}
                className="cursor-pointer transition-all duration-300 origin-[100px_115px]"
                style={{ transform: isActive('Core') ? 'scale(1.2)' : 'scale(1)' }}
                fill={isActive('Core') ? '#ef4444' : '#3f3f46'}
              >
                <rect x="88" y="100" width="10" height="8" rx="2" />
                <rect x="102" y="100" width="10" height="8" rx="2" />
                <rect x="88" y="111" width="10" height="8" rx="2" />
                <rect x="102" y="111" width="10" height="8" rx="2" />
                <path d="M86,122 C92,122 100,125 100,125 C100,125 108,122 114,122 C110,135 90,135 86,122 Z" />
              </g>

              {/* ГАР / БИЦЕПС (Biceps) */}
              <g 
                onClick={() => setSelectedMuscle('Biceps')}
                onMouseEnter={() => setHoveredMuscle('Biceps')}
                onMouseLeave={() => setHoveredMuscle(null)}
                className="cursor-pointer transition-all duration-300"
                fill={isActive('Biceps') ? '#ef4444' : '#3f3f46'}
              >
                {/* Баруун бицепс (томорно) */}
                <path d="M60,88 C54,96 50,108 52,118 C54,122 58,122 60,116 C62,108 64,96 60,88 Z" className="transition-transform duration-300 origin-[56px_100px]" style={{ transform: isActive('Biceps') ? 'scale(1.25)' : 'scale(1)' }} />
                {/* Зүүн бицепс (томорно) */}
                <path d="M140,88 C146,96 150,108 148,118 C146,122 142,122 140,116 C138,108 136,96 140,88 Z" className="transition-transform duration-300 origin-[144px_100px]" style={{ transform: isActive('Biceps') ? 'scale(1.25)' : 'scale(1)' }} />
                {/* Шуу (тохой ба сарвуу) */}
                <path d="M51,120 C46,132 42,145 44,152 C46,155 50,152 52,144 C55,134 55,124 51,120 Z" fill="#27272a" />
                <path d="M149,120 C154,132 158,145 156,152 C154,155 150,152 148,144 C145,134 145,124 149,120 Z" fill="#27272a" />
              </g>

              {/* ХӨЛ (Legs) */}
              <g 
                onClick={() => setSelectedMuscle('Legs')}
                onMouseEnter={() => setHoveredMuscle('Legs')}
                onMouseLeave={() => setHoveredMuscle(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Гуянууд */}
                <g className="transition-transform duration-300 origin-[100px_160px]" style={{ transform: isActive('Legs') ? 'scale(1.15)' : 'scale(1)' }}>
                  <path d="M76,140 C70,160 68,190 74,220 C79,220 84,200 88,180 C92,160 90,142 76,140 Z" fill={isActive('Legs') ? '#ef4444' : '#3f3f46'} />
                  <path d="M124,140 C130,160 132,190 126,220 C121,220 116,200 112,180 C108,160 110,142 124,140 Z" fill={isActive('Legs') ? '#ef4444' : '#3f3f46'} />
                </g>
                {/* Шилбэнүүд */}
                <path d="M73,224 C70,245 72,275 75,285 L81,285 C83,270 82,245 81,224 Z" fill={isActive('Legs') ? '#ef4444' : '#27272a'} />
                <path d="M127,224 C130,245 128,275 125,285 L119,285 C117,270 118,245 119,224 Z" fill={isActive('Legs') ? '#ef4444' : '#27272a'} />
              </g>
            </svg>

            <p className="mt-2 text-zinc-400 text-sm">
              Selected: <span className="text-red-400 font-semibold">{selectedMuscle}</span>
            </p>
          </div>
        </div>

        {/* Muscle Groups Grid Buttons */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Muscle Groups</h2>
          <div className="grid grid-cols-2 gap-3">
            {muscles.map((muscle) => (
              <button
                key={muscle}
                onClick={() => setSelectedMuscle(muscle)}
                onMouseEnter={() => setHoveredMuscle(muscle)}
                onMouseLeave={() => setHoveredMuscle(null)}
                className={`transition-all rounded-2xl p-4 border text-left ${
                  selectedMuscle === muscle
                    ? 'bg-red-500 border-red-600 text-white shadow-lg shadow-red-500/20 scale-[1.02]'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="text-lg font-medium">{muscle}</div>
                <div className={`text-sm mt-1 ${selectedMuscle === muscle ? 'text-red-100' : 'text-zinc-500'}`}>
                  {selectedMuscle === muscle ? 'Active' : 'Tap to select'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Exercises List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">{selectedMuscle} Exercises</h2>
            <span className="text-zinc-400 text-sm">3 exercises</span>
          </div>

          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div key={exercise.name} className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{exercise.name}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{exercise.muscle}</p>
                  </div>
                  <button className="bg-red-500 hover:bg-red-400 transition px-4 py-2 rounded-xl text-sm font-medium">
                    Add
                  </button>
                </div>
                <div className="flex gap-3 mt-4 text-sm">
                  <div className="bg-zinc-800 px-3 py-2 rounded-xl text-zinc-300">🏋️ {exercise.weight}</div>
                  <div className="bg-zinc-800 px-3 py-2 rounded-xl text-zinc-300">🔄 {exercise.reps}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Weekly Progress</h2>
            <span className="text-green-400 text-sm font-medium bg-green-500/10 px-2.5 py-0.5 rounded-full">+12%</span>
          </div>
          <div className="flex items-end gap-3 h-40 pt-4">
            {[40, 65, 50, 90, 70, 100, 80].map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg" style={{ height: `${value}%` }} />
                <span className="text-xs text-zinc-500">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-zinc-900/80 border border-zinc-800 rounded-3xl px-6 py-4 flex justify-between text-sm backdrop-blur-md shadow-2xl">
          <button className="text-red-400 font-semibold">Home</button>
          <button className="text-zinc-400">Workout</button>
          <button className="text-zinc-400">Progress</button>
          <button className="text-zinc-400">Profile</button>
        </div>

      </div>
    </div>
  );
}