import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import Header from '../../common/header';
import Summary from './summary';

const problems = [
  {
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.',
  },
  {
    title: 'Reverse String',
    difficulty: 'Easy',
    tags: ['String', 'Two Pointers'],
    description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
  },
  {
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    tags: ['String', 'Two Pointers'],
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
  },
  {
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    tags: ['Array', 'Dynamic Programming'],
    description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
  },
  {
    title: 'Container With Most Water',
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers'],
    description: 'You are given an integer array height of length n. There are vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).',
  },
];

const ProblemList = () => {
  return (
    <>
       <Header />
        <Box sx={{ backgroundColor: '#121212', color: 'white', padding: '40px' }}>
        {/* Header */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00CFC8', textAlign: 'center' }}>
            Practice Problems
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center', marginBottom: '40px' }}>
            Sharpen your coding skills with these curated problems
        </Typography>

        {/* Problem List */}
        {problems.map((problem, index) => (
            <Box key={index} sx={{ backgroundColor: '#1e1e1e', marginBottom: '20px', padding: '20px', borderRadius: '8px' }}>
            {/* Problem Title and Tags */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ color: '#00CFC8', fontWeight: 'bold' }}>
                {problem.title}
            </Typography>
            <Button
                variant="contained"
                sx={{
                backgroundColor: '#00CFC8',
                '&:hover': { backgroundColor: '#00b8b1' },
                padding: '5px 5px',
                }}
            >
                Solve
            </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                <Chip label={problem.difficulty} sx={{ backgroundColor: problem.difficulty === 'Easy' ? '#4caf50' : '#ff9800', color: '#fff' }} />
                {problem.tags.map((tag, idx) => (
                <Chip key={idx} label={tag} sx={{ backgroundColor: '#333', color: '#fff' }} />
                ))}
            </Box>
            {/* Problem Description */}
            <Typography variant="body2" sx={{ color: '#fff', marginBottom: 2 }}>
                {problem.description}
            </Typography>
            </Box>
        ))}

        {/* Summary */}
        {/* <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: '#fff' }}>
            Total Problems: {problems.length}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1 }}>
            <Chip label="Easy" sx={{ backgroundColor: '#4caf50', color: '#fff' }} />
            <Chip label="Medium" sx={{ backgroundColor: '#ff9800', color: '#fff' }} />
            <Chip label="Hard" sx={{ backgroundColor: '#f44336', color: '#fff' }} />
            </Box>
        </Box> */}
        <Summary 
            total={5}
            easy={3}
            medium={1}
            hard={1}
        />
        </Box>
    </>
  );
};

export default ProblemList;
