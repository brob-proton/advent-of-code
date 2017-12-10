let input = [0, 0, 2, 0, 0, 0, -5, -5, -4, 1, -5, 1, -1, -7, -1, -2, -14, -5, -5, -4, 1, 0, -9, 2, -4, -1, -18, -3, -12, -10, -22, -18, -28, -11, -33, 0, -22, -14, 2, -1, -14, -4, -5, -40, -33, -38, -12, -29, -47, -14, 2, -34, -26, -10, -47, -20, -24, -12, -12, -39, -43, -56, -36, -52, -38, -8, -53, -53, -31, -29, -53, -20, -71, -14, -61, -25, -70, -37, -32, -30, -10, -78, -42, -59, -40, -19, -41, -40, -81, -9, -69, -49, -39, -12, -6, -18, -93, -14, -46, -88, -72, -84, -51, -79, -23, -96, -72, -73, -38, -19, -7, -90, -37, -28, -18, -84, -42, -115, -33, -100, -99, -50, -37, -90, -60, -19, -59, -107, 0, -78, -40, -82, -114, -33, -24, -105, -22, -20, -39, -45, 0, -78, -40, -25, -78, -18, -122, -76, -123, -128, -88, -118, 2, -65, -115, -70, -6, -83, -113, 0, -102, -142, -34, -74, -101, -43, -112, -37, -126, -149, -28, -15, -28, -123, -36, -75, -54, -141, -77, -13, -91, -53, -168, -70, -149, -80, -111, -83, -48, -100, -111, -90, -87, -42, -54, -147, -131, -24, -24, -128, -145, -58, -164, -137, -116, -118, -152, -110, -15, 0, -185, -200, -137, -80, -174, -4, -172, -76, -51, -37, -118, -206, -134, -117, -102, -5, -176, -8, -217, -124, -1, -95, -217, -64, -192, -230, -209, -111, -133, -118, -213, -198, -199, -161, -225, -2, -239, -162, -121, -36, -213, -153, -19, -178, -52, -60, -182, -92, -186, -43, 0, -202, -73, -150, -152, -72, -181, -190, -26, -110, -100, -82, -265, -77, 2, -270, -42, -98, -91, -130, -7, -186, -222, -12, -26, -97, -216, -130, -201, -52, -220, -245, -263, -195, -68, -209, -6, -89, -161, -246, -123, -212, -153, -99, -227, -171, -146, -48, -105, -252, -169, -135, -7, -49, -231, -146, -40, -31, -233, -1, -245, -251, -228, -33, -58, -1, -154, -162, -192, -179, -212, -51, -316, -96, -210, -237, -198, -335, -136, 1, -144, -60, -116, -61, -44, -105, -80, -324, -54, -282, -282, -240, -73, -303, -114, -96, -149, -301, -201, -104, -286, -358, -288, -352, -8, -134, -358, -90, -30, -234, -243, -367, -157, -162, -119, -265, -340, -334, -11, -206, -311, -246, -34, -145, -183, -333, -311, -271, -299, -39, -316, -144, -269, -255, -192, -269, -111, -295, -236, -115, -26, -303, -16, -56, -150, -267, -252, -196, -148, -363, -322, -178, -136, -205, -115, -18, -410, -8, -196, -16, -59, -79, -300, -101, -242, -374, -21, -201, -106, -204, -53, -8, -33, -323, -172, -8, -240, -255, 0, -178, -384, -177, -254, -120, -277, -109, -417, -360, -19, -236, -87, -184, -176, -405, -252, -274, -366, -107, -201, -62, -407, -130, -288, -382, -319, -463, -82, -187, -242, -142, -400, -37, -315, -407, -384, -413, -51, -303, -318, -401, -222, -219, -20, -446, -33, -105, -322, -177, -18, -212, -31, -370, -247, -87, -428, -22, -74, -108, -6, -49, -242, -298, -266, -500, -359, -24, -465, -137, -344, -47, -268, -240, -92, -463, -311, -107, -143, -319, -409, -158, -267, -447, -140, -323, -351, -471, -381, -433, -3, -396, -386, -269, -244, -201, -379, -534, -140, -278, -222, -511, -182, -65, -104, -21, -336, -418, -303, -169, 0, -31, -99, -449, -429, -91, -471, 0, -284, -320, -32, -161, -548, -126, -173, -138, -411, -477, -11, -399, -388, -427, -450, -262, -48, -372, -254, -535, -36, -452, -545, -289, -339, -314, -455, -146, -271, -274, -103, -109, -565, -114, -373, -517, -453, -184, -216, -314, -75, -401, -411, -117, -2, -417, -449, -146, -252, -560, -232, -222, -462, -133, -410, -323, -431, -272, -49, -256, -332, -342, -270, -186, -275, -179, -335, -613, -149, -489, -334, -415, -401, -582, -306, -383, -478, -65, -171, -554, -24, -261, -628, -298, -20, -511, -459, -507, -278, -194, -89, -391, -346, -472, -268, -281, -326, -259, -452, -470, -311, -401, -234, -154, -511, -34, -445, -25, -322, -143, -35, -267, -181, -132, -235, -653, -78, -193, -353, -591, -575, -296, -160, -533, -203, -468, -266, -373, -562, -550, -555, -39, -100, -338, -82, -323, -200, -388, -185, -260, -413, -161, -516, -169, -437, -296, -232, -171, -25, -237, -125, -74, -506, -5, -494, -270, -526, -3, -463, -505, -170, -7, -321, -22, -605, -220, -115, -158, -509, -560, -195, -292, -632, -101, -374, -60, -36, -142, -617, -723, -114, -709, -536, -308, -513, -680, -256, -111, -27, -497, -20, -46, -108, -385, -412, -262, -509, -34, -101, -139, -73, -208, -192, -625, -206, -273, -416, -263, -316, -417, -378, -126, -631, -195, -191, -152, -503, -84, -110, -529, -702, -136, -83, -125, -658, -223, -16, -23, -681, -535, -599, -587, -612, -377, -701, -479, -396, -556, -608, -548, -474, -704, -19, -590, -512, -643, -121, -440, -400, -638, -360, -790, -225, -617, -361, -14, -259, -465, -689, -421, -480, -386, -416, -804, -145, -661, -679, -158, -622, -130, -380, -50, -677, -375, -795, -423, -727, -231, -125, -363, -77, -825, -363, -557, -61, -109, -368, -434, -826, -347, -174, -638, -645, -210, -655, -314, -549, -26, -467, -59, -233, -21, -212, -682, -551, -285, -53, -690, -391, -655, -416, -247, -621, 0, -160, -252, -329, -270, -213, -489, -681, -388, -142, -660, -157, -102, -876, -568, -411, -234, -490, -166, -105, -743, -759, -196, -127, -358, -100, -272, -107, -186, -742, -440, -520, -272, -822, -224, -613, -53, -295, -511, -292, -420, -298, -127, -490, -117, -240, -277, -683, -37, -447, -671, -646, -562, -228, -341, -725, -797, -350, -648, -164, -660, -424, -295, -855, -213, -773, -733, -526, -339, -43, -657, -361, -224, -85, -188, -750, -377, -836, -311, -550, -71, -627, -719, -514, -923, -599, -166, -431, -706, -413, -444, -359, -811, -81, -738, -120, -127, -191, -592, -420, -466, -863, -441, -338, -99, -838, -835, -418, -162, -368, -511, -35, -146, -457, -176, -778, -508, -706, -729, -188, -904, -706, -441, -399, -790, -932, -805, -462, -387, -17, -661, -714, -93, -741, -979, -96, -791, -830, -177, -73, -309, -497, -47, -451, -628, -215, -631, 0, -98, -938, -138, -129, -164, -387, -668, -534, -679, -537, -589, -828, -815, -876, -403, -27],

    output = function () {
        let ix = 0, moves = 0;

        while (ix < input.length && ix >= 0) {
            ix += (input[ix] >= 3) ? (input[ix]--) : (input[ix]++);
            moves++;
        }

        console.log(moves);
    }();