import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Chip,
  Button,
  Select,
  MenuItem,
  Divider,
  Paper
} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import Editor from '@monaco-editor/react';
import Header from '../../common/header';
import { LANGUAGE_CONFIG } from '../../../helpers/data/problems';

// Get default code for the selected language
const getDefaultCode = (langName) => {
  const langKey = Object.keys(LANGUAGE_CONFIG).find(
    key => LANGUAGE_CONFIG[key].name === langName
  );
  return langKey ? LANGUAGE_CONFIG[langKey].defaultCode : LANGUAGE_CONFIG.javascript.defaultCode;
};

//use piston api to execute the code

// Map language names to Monaco language IDs
const getMonacoLanguage = (langName) => {
  const langKey = Object.keys(LANGUAGE_CONFIG).find(
    key => LANGUAGE_CONFIG[key].name === langName
  );
  return langKey ? LANGUAGE_CONFIG[langKey].monacoLang : 'javascript';
};
    
export default function ProblemDetail() {
  const [language, setLanguage] = useState('JavaScript');
  const [code, setCode] = useState(getDefaultCode('JavaScript'));

  // Update code when language changes
  useEffect(() => {
    setCode(getDefaultCode(language));
  }, [language]);

  return (
    <>
    <Header />
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#1e1e1e' }}>
      {/* Left Panel - Problem Description */}
      <Box sx={{ 
        width: '45%', 
        bgcolor: '#262626', 
        color: '#fff',
        p: 3,
        overflowY: 'auto',
        borderRight: '1px solid #3e3e3e'
      }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Two Sum
          </Typography>
          <Chip label="Easy" size="small" sx={{ 
            bgcolor: '#00b8a3', 
            color: '#fff',
            fontWeight: 600
          }} />
        </Box>

        {/* Tags */}
        <Typography variant="body2" sx={{ color: '#888', mb: 3 }}>
          Array • Hash Table
        </Typography>

        <Divider sx={{ bgcolor: '#3e3e3e', mb: 3 }} />

        {/* Description Section */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Description
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#d4d4d4' }}>
          Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#d4d4d4' }}>
          You may assume that each input would have exactly one solution, and you may not use the same element twice.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#d4d4d4' }}>
          You can return the answer in any order.
        </Typography>

        {/* Examples Section */}
        <Typography variant="h6" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
          Examples
        </Typography>

        {/* Example 1 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#888' }}>
            Example 1
          </Typography>
          <Box sx={{ bgcolor: '#1e1e1e', p: 2, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <span style={{ color: '#4ec9b0' }}>Input:</span>
              <span style={{ color: '#d4d4d4' }}> nums = [2,7,11,15], target = 9</span>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <span style={{ color: '#4ec9b0' }}>Output:</span>
              <span style={{ color: '#d4d4d4' }}> [0,1]</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', fontSize: '0.875rem' }}>
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
            </Typography>
          </Box>
        </Box>

        {/* Example 2 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#888' }}>
            Example 2
          </Typography>
          <Box sx={{ bgcolor: '#1e1e1e', p: 2, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <span style={{ color: '#4ec9b0' }}>Input:</span>
              <span style={{ color: '#d4d4d4' }}> nums = [3,2,4], target = 6</span>
            </Typography>
            <Typography variant="body2">
              <span style={{ color: '#4ec9b0' }}>Output:</span>
              <span style={{ color: '#d4d4d4' }}> [1,2]</span>
            </Typography>
          </Box>
        </Box>

        {/* Example 3 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#888' }}>
            Example 3
          </Typography>
          <Box sx={{ bgcolor: '#1e1e1e', p: 2, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <span style={{ color: '#4ec9b0' }}>Input:</span>
              <span style={{ color: '#d4d4d4' }}> nums = [3,3], target = 6</span>
            </Typography>
            <Typography variant="body2">
              <span style={{ color: '#4ec9b0' }}>Output:</span>
              <span style={{ color: '#d4d4d4' }}> [0,1]</span>
            </Typography>
          </Box>
        </Box>

        {/* Constraints Section */}
        <Typography variant="h6" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
          Constraints
        </Typography>
        
        <Box sx={{ pl: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, color: '#d4d4d4' }}>
            • 2 ≤ nums.length ≤ 10⁴
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#d4d4d4' }}>
            • -10⁹ ≤ nums[i] ≤ 10⁹
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#d4d4d4' }}>
            • -10⁹ ≤ target ≤ 10⁹
          </Typography>
          <Typography variant="body2" sx={{ color: '#d4d4d4' }}>
            • Only one valid answer exists
          </Typography>
        </Box>
      </Box>

      {/* Right Panel - Code Editor */}
      <Box sx={{ 
        width: '55%', 
        bgcolor: '#1e1e1e',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Editor Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #3e3e3e'
        }}>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size="small"
            sx={{
              bgcolor: '#2d2d2d',
              color: '#d4d4d4',
              border: 'none',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiSelect-icon': { color: '#d4d4d4' }
            }}
          >
            {Object.values(LANGUAGE_CONFIG).map((lang) => (
              <MenuItem key={lang.name} value={lang.name}>
                {lang.name}
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            startIcon={<PlayArrow />}
            sx={{
              bgcolor: '#00b8a3',
              '&:hover': { bgcolor: '#009688' },
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Run Code
          </Button>
        </Box>

        {/* Code Editor Area */}
        <Box sx={{ 
          flex: 1,
          overflow: 'hidden'
        }}>
          <Editor
            height="100%"
            language={getMonacoLanguage(language)}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              formatOnPaste: true,
              formatOnType: true,
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              backgroundColor: '#1e1e1e',
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
              }
            }}
          />
        </Box>

        {/* Output Section */}
        <Box sx={{ 
          borderTop: '1px solid #3e3e3e',
          p: 2,
          bgcolor: '#262626',
          minHeight: '150px'
        }}>
          <Typography variant="subtitle2" sx={{ color: '#d4d4d4', mb: 1 }}>
            Output
          </Typography>
          <Typography variant="body2" sx={{ color: '#888', fontStyle: 'italic' }}>
            Click "Run Code" to see the output here.
          </Typography>
        </Box>
      </Box>
    </Box>
    </>
  );
}