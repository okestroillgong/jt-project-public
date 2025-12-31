import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTabStore } from '@/lib/store/tabs';

export default function LoginPage() {
  const base = import.meta.env.BASE_URL;
const navigate = useNavigate();
  const addTab = useTabStore((state) => state.addTab);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);
  const [clientIP, setClientIP] = useState('192.111.111.102');
  const [isLoading, setIsLoading] = useState(false);

  // ???縕ワ쭕??β돦裕????筌먲퐢沅??釉띾쐞???釉띯뵛
  useEffect(() => {
    const savedUserId = localStorage.getItem('savedUserId');
    const savedRemember = localStorage.getItem('rememberLogin');
    if (savedRemember === 'true' && savedUserId) {
      setUserId(savedUserId);
      setRememberLogin(true);
    }

    // ???? ?β돦裕??筌뤾퍓彛???⑤객臾띄춯?嶺?????⑤８堉??怨쀬Ŧ ?????    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/counseling/general-counseling/bond-counseling');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert('??????熬곣뫗逾??? ???놁졑??怨삵룖?筌뤾쑴??');
      return;
    }

    if (!password.trim()) {
      alert('??貫裕???援?????놁졑??怨삵룖?筌뤾쑴??');
      return;
    }

    setIsLoading(true);

    // ?β돦裕????筌먲퐢沅?????嶺뚳퐣瑗??    if (rememberLogin) {
      localStorage.setItem('savedUserId', userId);
      localStorage.setItem('rememberLogin', 'true');
    } else {
      localStorage.removeItem('savedUserId');
      localStorage.removeItem('rememberLogin');
    }

    // ?β돦裕???嶺뚳퐣瑗??(???깆젷 ??뚮뿭寃??????API ?筌뤾쑵??
    // ??⑤틳嫄??諭紐드슖??띠룄????嶺뚳퐣瑗??    setTimeout(() => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userId', userId);
      setIsLoading(false);

      // 嶺?????⑤８堉????怨뺣뼺? ???????      const bondCounselingPath = '/counseling/general-counseling/bond-counseling';
      addTab({
        id: bondCounselingPath,
        label: '嶺?????⑤８堉?,
        path: bondCounselingPath,
      });
      navigate(bondCounselingPath);
    }, 500);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(`${base}login/background.png`)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ?β돦裕????꾩룆踰?????쳜??????*/}
      <div className="flex items-end gap-0">
        {/* ?β돦裕??????꾩룆踰??*/}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg px-8 py-12 w-[420px] relative z-10">
          {/* ?β돦裕????⑤챶??*/}
          <div className="flex items-center gap-2 mb-8">
            <img
              src={`${base}login/text-logo.png`}
              alt="JT ?곸궡裕뉔뇡???怨뺣깹???
              className="h-6"
            />
            <span className="text-gray-300 text-lg -mt-1">|</span>
            <span className="text-gray-500 text-xl font-medium -mt-1">Jany system</span>
          </div>

          {/* ?β돦裕?????*/}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* ??????熬곣뫗逾??*/}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ??????熬곣뫗逾??              </label>
              <Input
                type="text"
                placeholder="??????熬곣뫗逾??? ???놁졑??怨삵룖?筌뤾쑴??"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* ??貫裕???援?*/}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ??貫裕???援?              </label>
              <Input
                type="password"
                placeholder="??貫裕???援?????놁졑??怨삵룖?筌뤾쑴??"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* ?β돦裕????筌먲퐢沅?????& ???쇱뗀 IP */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rememberLogin"
                  checked={rememberLogin}
                  onCheckedChange={(checked) => setRememberLogin(checked as boolean)}
                />
                <label
                  htmlFor="rememberLogin"
                  className="text-sm font-semibold text-gray-600 cursor-pointer"
                >
                  ?β돦裕??筌뤾쑴?잏솻?????                </label>
              </div>
              <span className="text-sm text-gray-500">
                ???쇱뗀 IP : {clientIP}
              </span>
            </div>

            {/* ?β돦裕????뺢퀗???*/}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 mt-16 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium text-base"
            >
              {isLoading ? '?β돦裕???繞?..' : '?β돦裕???}
            </Button>
          </form>
        </div>

        {/* ??븐슙???嶺뚢뼰維??????嶺뚯솘? */}
        <img
          src={`${base}login/arrow-image.png`}
          alt="?繹먮냱??嶺뚢뼰維??
          className="w-[280px] h-auto -ml-2 mb-4 relative z-0"
        />
      </div>
    </div>
  );
}
